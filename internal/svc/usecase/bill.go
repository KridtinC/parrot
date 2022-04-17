package usecase

import (
	"context"
	"log"
	"parrot/internal/session"
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

// Create create bill and store in db
func (b *BillUseCase) Create(ctx context.Context, payType entity.PayType, payeeList []string, totalAmount float32) error {

	var (
		ss   = session.MustGet(ctx)
		now  = time.Now()
		bill = &entity.BillInfo{
			Bill: &entity.Bill{
				BillID:      helper.TimeToTimeStamp(now),
				Amount:      totalAmount,
				PayType:     payType,
				PayerID:     ss.UserID,
				CreatedOn:   now,
				Description: "",
			},
			PayeeList: make([]*entity.PayeeInfo, 0),
		}
	)

	for _, payee := range payeeList {
		bill.PayeeList = append(bill.PayeeList, &entity.PayeeInfo{
			PayeeID: payee,
			BillID:  bill.BillID,
			IsPaid:  false,
		})
	}

	err := b.billRepository.Create(ctx, bill)
	if err != nil {
		log.Printf("cannot create bill id %s err %s", bill.BillID, err.Error())
		return err
	}

	return nil
}
