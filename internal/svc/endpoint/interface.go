package endpoint

import (
	"context"
	"parrot/internal/svc/entity"
)

type billUseCase interface {
	Get(ctx context.Context, billID string) (*entity.Bill, error)
	Create(ctx context.Context, payType entity.PayType, halvedForList []string, amount float32, description string) error
	GetAll(ctx context.Context, onlyMe bool) ([]*entity.Bill, error)
}

type userUseCase interface {
	Get(ctx context.Context, userID string) (*entity.User, error)
	GetAllUserIDs(ctx context.Context) ([]string, error)
}

type authUseCase interface {
	Login(ctx context.Context, userID, password string) (string, error)
}
