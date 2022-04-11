package endpoint

import (
	"context"
	"log"
	"parrot/proto/svc"
)

type AuthEndpoint struct {
	svc.UnimplementedAuthServer
	authUseCase authUseCase
}

func NewAuth(authUseCase authUseCase) *AuthEndpoint {
	return &AuthEndpoint{
		authUseCase: authUseCase,
	}
}

func (a *AuthEndpoint) Login(ctx context.Context, req *svc.LoginRequest) (*svc.LoginResponse, error) {

	log.Printf("called login, user id %v\n", req.GetUserId())

	token, err := a.authUseCase.Login(ctx, req.GetUserId())
	if err != nil {
		return nil, err
	}

	return &svc.LoginResponse{
		StatusCode: 200,
		Token:      token,
	}, nil
}
