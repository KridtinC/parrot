package usecase

import (
	"context"
	"parrot/internal/svc/entity"
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
