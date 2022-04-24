package endpoint

import (
	"parrot/internal/svc/entity"
	billpb "parrot/proto/svc/bill"
)

// BillsToProto convert bills to proto
func BillsToProto(bills []*entity.Bill) []*billpb.Bill {
	var billspb = make([]*billpb.Bill, 0)
	for _, bill := range bills {
		billspb = append(billspb, bill.ToProto())
	}

	return billspb
}
