package endpoint

import (
	"context"
	"parrot/internal/svc/entity"
)

type billUseCase interface {
	Get(ctx context.Context, billID string) (*entity.Bill, error)
	Create(ctx context.Context, payType entity.PayType, halvedForList []string, amount float32) error
}
