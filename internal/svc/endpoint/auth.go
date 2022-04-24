package endpoint

import (
	"context"
	"log"
	"parrot/proto/svc"
)

// AuthEndpoint auth endpoint for authorization features
type AuthEndpoint struct {
	svc.UnimplementedAuthServer
	authUseCase authUseCase
}

// NewAuth new auth endpoint instance
func NewAuth(authUseCase authUseCase) *AuthEndpoint {
	return &AuthEndpoint{
		authUseCase: authUseCase,
	}
}

// Login login into parrot and send token back to client
func (a *AuthEndpoint) Login(ctx context.Context, req *svc.LoginRequest) (*svc.LoginResponse, error) {

	log.Printf("called login, user id %v\n", req.GetUserId())

	token, err := a.authUseCase.Login(ctx, req.GetUserId(), req.GetPassword())
	if err != nil {
		return nil, err
	}

	return &svc.LoginResponse{
		Token: token,
	}, nil
}
