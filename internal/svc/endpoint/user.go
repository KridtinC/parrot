package endpoint

import (
	"context"
	"log"
	"parrot/proto/svc"
)

type UserEndpoint struct {
	svc.UnimplementedUserServer
	userUseCase userUseCase
}

func NewUser(userUseCase userUseCase) *UserEndpoint {
	return &UserEndpoint{
		userUseCase: userUseCase,
	}
}

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
