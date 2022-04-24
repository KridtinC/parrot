package endpoint

import (
	"context"
	"log"
	"parrot/proto/svc"
)

// UserEndpoint user endpoint for get/post user information
type UserEndpoint struct {
	svc.UnimplementedUserServer
	userUseCase userUseCase
}

// NewUser new user endpoint instance
func NewUser(userUseCase userUseCase) *UserEndpoint {
	return &UserEndpoint{
		userUseCase: userUseCase,
	}
}

// Get get user information
func (u *UserEndpoint) Get(ctx context.Context, req *svc.GetUserRequest) (*svc.GetUserResponse, error) {
	log.Printf("called get, user id %s\n", req.GetUserId())

	user, err := u.userUseCase.Get(ctx, req.GetUserId())
	if err != nil {
		return nil, err
	}

	return &svc.GetUserResponse{
		UserId:    user.UserID,
		FirstName: user.FirstName,
		LastName:  user.LastName,
	}, nil
}

// GetAll get all user names
func (u *UserEndpoint) GetAll(ctx context.Context, req *svc.GetAllUsersRequest) (*svc.GetAllUsersResponse, error) {
	log.Print("called get all users")

	userIDs, err := u.userUseCase.GetAllUserIDs(ctx)
	if err != nil {
		return nil, err
	}

	return &svc.GetAllUsersResponse{
		UserIds: userIDs,
	}, nil
}
