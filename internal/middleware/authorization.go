package middleware

import (
	"context"
	"fmt"
	"log"
	"parrot/internal/config"
	"strings"
	"time"

	"github.com/golang-jwt/jwt"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

// AuthorizationInterceptor intercept authorize token middleware into endpoint
func AuthorizationInterceptor() grpc.ServerOption {
	return grpc.UnaryInterceptor(func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp interface{}, err error) {
		start := time.Now()
		fmt.Println(info.FullMethod)

		// authorize token
		err = authorizeToken(ctx, info.FullMethod)
		if err != nil {
			return resp, err
		}

		resp, err = handler(ctx, req)

		log.Printf("method %s tooks %s error %v", info.FullMethod, time.Since(start), err)
		return resp, err
	})
}

func authorizeToken(ctx context.Context, uri string) error {

	if uri == "/svc.Auth/Login" {
		return nil
	}

	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return fmt.Errorf("missing metadata")
	}

	values := md["authorization"]
	if len(values) == 0 {
		return fmt.Errorf("authorization token is not provided")
	}

	accessToken := values[0]

	tokenStr := strings.ReplaceAll(accessToken, "Bearer ", "")
	claim := &jwt.StandardClaims{}
	token, err := jwt.ParseWithClaims(tokenStr, claim, func(t *jwt.Token) (interface{}, error) {
		return config.Get().JWTSecretKey, nil
	})
	if err != nil {
		if err == jwt.ErrSignatureInvalid {
			return fmt.Errorf("Invalid signature")
		}
		return fmt.Errorf("Cannot parse token")
	}

	if !token.Valid {
		return fmt.Errorf("Unauthorized")
	}

	return nil
}
