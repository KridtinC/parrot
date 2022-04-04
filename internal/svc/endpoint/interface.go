package endpoint

import (
	"context"
	"parrot/internal/svc/entity"
)

type billUseCase interface {
	Get(ctx context.Context, billID string) (*entity.Bill, error)
}
