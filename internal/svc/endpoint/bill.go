package endpoint

import (
	"context"
	"log"
	"parrot/proto/billpb"
)

// BillEndpoint endpoint for bills
type BillEndpoint struct {
	billpb.UnimplementedBillServer
}

// NewBillEndpoint init bill endpoint
func NewBillEndpoint() *BillEndpoint {
	return &BillEndpoint{}
}

// Add add bill
func (b *BillEndpoint) Add(ctx context.Context, req *billpb.AddRequest) (*billpb.AddResponse, error) {

	log.Printf("called add, type %s list %v amount %v\n", req.GetType(), req.GetHalfForList(), req.GetAmount())

	return &billpb.AddResponse{
		StatusCode: 200,
	}, nil
}
