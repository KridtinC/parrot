package usecase

import (
	"context"
	"parrot/internal/svc/entity"
)

type billRepository interface {
	Get(ctx context.Context, billID string) (*entity.Bill, error)
}
