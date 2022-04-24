package endpoint

import (
	"context"
	"log"
	"parrot/internal/svc/entity"
	"parrot/pkg/meta"
	"parrot/proto/svc"
)

// BillEndpoint endpoint for bills
type BillEndpoint struct {
	svc.UnimplementedBillServer
	billUseCase billUseCase
}

// NewBill init bill endpoint
func NewBill(billUseCase billUseCase) *BillEndpoint {
	return &BillEndpoint{
		billUseCase: billUseCase,
	}
}

// Add add bill
func (b *BillEndpoint) Add(ctx context.Context, req *svc.AddBillRequest) (*svc.AddBillResponse, error) {

	log.Printf("called add, type %s list %v amount %v description %s\n", req.GetPayType(), req.GetPayeeList(), req.GetAmount(), req.GetDescription())

	if len(req.GetPayeeList()) == 0 {
		return nil, meta.ErrorMissingField("Payee List")
	}

	err := b.billUseCase.Create(ctx, entity.PayTypeFromProtoMap[req.GetPayType()], req.GetPayeeList(), float32(req.GetAmount()), req.GetDescription())
	if err != nil {
		return nil, err
	}

	return &svc.AddBillResponse{
		StatusCode: 200,
	}, nil
}

// Get get bill
func (b *BillEndpoint) Get(ctx context.Context, req *svc.GetBillRequest) (*svc.GetBillResponse, error) {

	log.Printf("called get, bill id %s\n", req.GetBillId())

	bill, err := b.billUseCase.Get(ctx, req.GetBillId())
	if err != nil {
		return nil, err
	}

	return &svc.GetBillResponse{
		Bill: bill.ToProto(),
	}, nil
}

// GetAll get all bills to show in list filter by me or not
func (b *BillEndpoint) GetAll(ctx context.Context, req *svc.GetAllBillRequest) (*svc.GetAllBillResponse, error) {

	bills, err := b.billUseCase.GetAll(ctx, req.GetOnlyMe())
	if err != nil {
		return nil, err
	}

	return &svc.GetAllBillResponse{
		BillList: BillsToProto(bills),
	}, nil

}
