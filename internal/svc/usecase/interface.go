package usecase

import (
	"context"
	"parrot/internal/svc/entity"
)

type billRepository interface {
	Get(ctx context.Context, billID string) (*entity.Bill, error)
	Create(ctx context.Context, bill *entity.BillInfo) error
	GetAll(ctx context.Context, onlyMe bool) ([]*entity.Bill, error)
}
type userRepository interface {
	Get(ctx context.Context, userID string) (*entity.User, error)
	GetAllUserIDs(ctx context.Context) ([]string, error)
}
