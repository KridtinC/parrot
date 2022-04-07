package endpoint

import (
	"context"
	"log"
	"parrot/internal/svc/entity"
	"parrot/proto/svc"
)

// BillEndpoint endpoint for bills
type BillEndpoint struct {
	svc.UnimplementedBillServer
	billUseCase billUseCase
}

// NewBillEndpoint init bill endpoint
func NewBillEndpoint(billUseCase billUseCase) *BillEndpoint {
	return &BillEndpoint{
		billUseCase: billUseCase,
	}
}

// Add add bill
func (b *BillEndpoint) Add(ctx context.Context, req *svc.AddRequest) (*svc.AddResponse, error) {

	log.Printf("called add, type %s list %v amount %v\n", req.GetPayType(), req.GetHalvedForList(), req.GetAmount())

	err := b.billUseCase.Create(ctx, entity.PayTypeFromProtoMap[req.GetPayType()], req.GetHalvedForList(), float32(req.GetAmount()))
	if err != nil {
		return nil, err
	}

	return &svc.AddResponse{
		StatusCode: 200,
	}, nil
}

// Get get bill
func (b *BillEndpoint) Get(ctx context.Context, req *svc.GetRequest) (*svc.GetResponse, error) {

	log.Printf("called get, bill id %s\n", req.GetBillId())

	bill, err := b.billUseCase.Get(ctx, req.GetBillId())
	if err != nil {
		return nil, err
	}

	return &svc.GetResponse{
		Bill: bill.ToProto(),
	}, nil
}
