package usecase

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
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
func (a *AuthUseCase) Login(ctx context.Context, userID, password string) (string, error) {
	user, err := a.userRepository.Get(ctx, userID)
	if err != nil {
		if meta.IsDBNotFoundError(err) {
			return "", meta.ErrorInvalidUserPass()
		}
		return "", meta.ErrorInternalServer(err)
	}

	// hash input password
	hsha := sha256.New()
	hsha.Write([]byte(password))
	hashedInputPassword := hex.EncodeToString(hsha.Sum(nil))

	if user.Password != hashedInputPassword {
		return "", meta.ErrorInvalidUserPass()
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
		return "", meta.ErrorInternalServer(err)
	}

	return tokenStr, nil
}
