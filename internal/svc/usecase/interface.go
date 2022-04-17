package usecase

import (
	"context"
	"parrot/internal/svc/entity"
)

type billRepository interface {
	Get(ctx context.Context, billID string) (*entity.Bill, error)
	Create(ctx context.Context, bill *entity.BillInfo) error
}
type userRepository interface {
	Get(ctx context.Context, userID string) (*entity.User, error)
}
