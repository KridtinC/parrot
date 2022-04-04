package entity

import billpb "parrot/proto/svc/bill"

// Bill bill entity collect who is payer/payee, and also amount
type Bill struct {
	BillID  string
	PayerID string
	PayeeID string
	Amount  float32
	PayType PayType
}

// ToProto convert bill to proto
func (b *Bill) ToProto() *billpb.Bill {
	return &billpb.Bill{
		BillId:  b.BillID,
		PayerId: b.PayerID,
		PayeeId: b.PayeeID,
		Amount:  b.Amount,
		PayType: PayTypeToProtoMap[b.PayType],
	}
}

// PayTypeToProtoMap paytype mapped from enum to proto enum
var PayTypeToProtoMap = map[PayType]billpb.PayType{
	PayTypeHalved:   billpb.PayType_BillTypeHalved,
	PayTypeAdvanced: billpb.PayType_BillTypeAdvanced,
}

// PayType user's pay type
type PayType string

var (
	// PayTypeHalved means split bill for n person
	PayTypeHalved PayType = "HALVED"
	// PayTypeAdvanced means payer advanced money for payee with full amount
	PayTypeAdvanced PayType = "ADVANCED"
)
