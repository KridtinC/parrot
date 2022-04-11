package usecase

import (
	"context"
	"parrot/internal/svc/entity"
)

type UserUseCase struct {
	userRepository userRepository
}

func NewUser(userRepository userRepository) *UserUseCase {
	return &UserUseCase{
		userRepository: userRepository,
	}
}

func (u *UserUseCase) Get(ctx context.Context, userID string) (*entity.User, error) {

	user, err := u.userRepository.Get(ctx, userID)
	if err != nil {
		return nil, err
	}

	return user, nil
}
