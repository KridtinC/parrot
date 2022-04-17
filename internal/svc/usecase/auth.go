package usecase

import (
	"context"
	"parrot/internal/config"
	"parrot/pkg/meta"
	"time"

	"github.com/golang-jwt/jwt"
)

// AuthUseCase auth usecase
type AuthUseCase struct {
	userRepository userRepository
}

// NewAuth new auth usecase instance
func NewAuth(userRepository userRepository) *AuthUseCase {
	return &AuthUseCase{
		userRepository: userRepository,
	}
}

// Login login into parrot
func (a *AuthUseCase) Login(ctx context.Context, userID string) (string, error) {
	_, err := a.userRepository.Get(ctx, userID)
	if err != nil {
		if meta.IsDBNotFoundError(err) {
			return "", err
		}
		return "", err
	}

	var now = time.Now()

	expiresAt := now.Add(15 * time.Minute)

	claims := &jwt.StandardClaims{
		ExpiresAt: expiresAt.Unix(),
		IssuedAt:  now.Unix(),
		Audience:  userID,
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenStr, err := token.SignedString(config.Get().JWTSecretKey)
	if err != nil {
		return "", err
	}

	return tokenStr, nil
}
