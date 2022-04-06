package usecase

import (
	"context"
	"log"
	"parrot/internal/svc/entity"
	"parrot/pkg/helper"
	"time"
)

type BillUseCase struct {
	billRepository billRepository
}

func NewBill(billRepository billRepository) *BillUseCase {
	return &BillUseCase{
		billRepository: billRepository,
	}
}

func (b *BillUseCase) Get(ctx context.Context, billID string) (*entity.Bill, error) {

	bill, err := b.billRepository.Get(ctx, billID)
	if err != nil {
		return nil, err
	}

	return bill, nil
}

func (b *BillUseCase) Create(ctx context.Context, payType entity.PayType, halvedForList []string, totalAmount float32) error {

	var bill = &entity.Bill{}

	if payType == entity.PayTypeHalved {
		bill.Amount = totalAmount / float32(len(halvedForList)+1) // divide to individual amount
		bill.PayType = payType
		for _, payeeID := range halvedForList {
			bill.BillID = helper.TimeToTimeStamp(time.Now())
			bill.PayerID = "U000000001" // TODO, change to context user
			bill.PayeeID = payeeID

			err := b.billRepository.Create(ctx, bill)
			if err != nil {
				log.Printf("cannot create bill id %s err %s", bill.BillID, err.Error())
				return err
			}
		}
	}

	return nil
}
