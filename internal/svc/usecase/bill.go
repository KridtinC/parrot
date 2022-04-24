package usecase

import (
	"context"
	"log"
	"parrot/internal/session"
	"parrot/internal/svc/entity"
	"parrot/pkg/helper"
	"parrot/pkg/meta"
	"time"
)

// BillUseCase usecase for manage user's bill
type BillUseCase struct {
	billRepository billRepository
	userRepository userRepository
}

// NewBill init bill usecase instance
func NewBill(billRepository billRepository, userRepository userRepository) *BillUseCase {
	return &BillUseCase{
		billRepository: billRepository,
		userRepository: userRepository,
	}
}

// Get get bill excluding payee
func (b *BillUseCase) Get(ctx context.Context, billID string) (*entity.Bill, error) {

	bill, err := b.billRepository.Get(ctx, billID)
	if err != nil {
		if meta.IsDBNotFoundError(err) {
			return nil, meta.ErrorEntityNotFound(entity.Bill{}, billID)
		}
		return nil, meta.ErrorInternalServer(err)
	}

	return bill, nil
}

// Create create bill and store in db
func (b *BillUseCase) Create(ctx context.Context, payType entity.PayType, payeeList []string, totalAmount float32, description string) error {

	for _, payeeID := range payeeList {
		_, err := b.userRepository.Get(ctx, payeeID)
		if err != nil {
			if meta.IsDBNotFoundError(err) {
				return meta.ErrorPayeeNotFound(payeeID)
			}
			return meta.ErrorInternalServer(err)
		}
	}

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
				Description: description,
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
		return meta.ErrorInternalServer(err)
	}

	return nil
}

// GetAll get all bills
func (b *BillUseCase) GetAll(ctx context.Context, onlyMe bool) ([]*entity.Bill, error) {

	bills, err := b.billRepository.GetAll(ctx, onlyMe)
	if err != nil {
		return nil, meta.ErrorInternalServer(err)
	}

	return bills, nil
}
