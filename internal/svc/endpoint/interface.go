package endpoint

import (
	"context"
	"parrot/internal/svc/entity"
)

type billUseCase interface {
	Get(ctx context.Context, billID string) (*entity.Bill, error)
	Create(ctx context.Context, payType entity.PayType, halvedForList []string, amount float32) error
}

type userUseCase interface {
	Get(ctx context.Context, userID string) (*entity.User, error)
}

type authUseCase interface {
	Login(ctx context.Context, userID, password string) (string, error)
}
