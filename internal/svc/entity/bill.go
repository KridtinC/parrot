package entity

import (
	billpb "parrot/proto/svc/bill"
	"time"

	"google.golang.org/protobuf/types/known/timestamppb"
)

// Bill bill entity collect who is payer, and also amount
type Bill struct {
	BillID      string
	Amount      float32
	Description string
	PayType     PayType
	CreatedOn   time.Time
	PayerID     string
	ReceiptID   string
}

// Keys return key of bill
func (b *Bill) Keys() []string {
	return []string{b.BillID}
}

// BillInfo bill including payee
type BillInfo struct {
	*Bill
	PayeeList []*PayeeInfo
}

// PayeeInfo payee information
type PayeeInfo struct {
	PayeeID string
	BillID  string
	PaidOn  time.Time
	IsPaid  bool
}

// ToProto convert bill to proto
func (b *Bill) ToProto() *billpb.Bill {
	return &billpb.Bill{
		BillId:      b.BillID,
		Amount:      b.Amount,
		Description: b.Description,
		PayType:     PayTypeToProtoMap[b.PayType],
		CreatedOn:   timestamppb.New(b.CreatedOn),
		PayerId:     b.PayerID,
		ReceiptId:   b.ReceiptID,
	}
}

// PayTypeToProtoMap paytype mapped from enum to proto enum
var PayTypeToProtoMap = map[PayType]billpb.PayType{
	PayTypeHalved:   billpb.PayType_BillTypeHalved,
	PayTypeAdvanced: billpb.PayType_BillTypeAdvanced,
}

// PayTypeFromProtoMap paytype mapped from proto enum to proto
var PayTypeFromProtoMap = map[billpb.PayType]PayType{
	billpb.PayType_BillTypeInvalid:  "",
	billpb.PayType_BillTypeHalved:   PayTypeHalved,
	billpb.PayType_BillTypeAdvanced: PayTypeAdvanced,
}

// PayType user's pay type
type PayType string

var (
	// PayTypeHalved means split bill for n person
	PayTypeHalved PayType = "HALVED"
	// PayTypeAdvanced means payer advanced money for payee with full amount
	PayTypeAdvanced PayType = "ADVANCED"
)
