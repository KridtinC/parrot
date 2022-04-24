package usecase

import (
	"context"
	"parrot/internal/svc/entity"
	"parrot/pkg/meta"
)

// UserUseCase user usecase for user mgmt operation
type UserUseCase struct {
	userRepository userRepository
}

// NewUser new user usecase instance
func NewUser(userRepository userRepository) *UserUseCase {
	return &UserUseCase{
		userRepository: userRepository,
	}
}

// Get return user information
func (u *UserUseCase) Get(ctx context.Context, userID string) (*entity.User, error) {

	user, err := u.userRepository.Get(ctx, userID)
	if err != nil {
		if meta.IsDBNotFoundError(err) {
			return nil, meta.ErrorEntityNotFound(&entity.User{}, userID)
		}
		return nil, meta.ErrorInternalServer(err)
	}

	return user, nil
}

// GetAllUserIDs get all user ids
func (u *UserUseCase) GetAllUserIDs(ctx context.Context) ([]string, error) {

	userIDs, err := u.userRepository.GetAllUserIDs(ctx)
	if err != nil {
		return nil, meta.ErrorInternalServer(err)
	}

	return userIDs, nil

}
