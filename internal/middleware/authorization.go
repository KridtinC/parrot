package middleware

import (
	"context"
	"fmt"
	"log"
	"parrot/internal/config"
	"parrot/internal/session"
	"parrot/pkg/helper"
	"parrot/pkg/meta"
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
		log.Printf(info.FullMethod)

		// authorize token
		ss, err := authorizeToken(ctx, info.FullMethod)
		if err != nil {
			return resp, err
		}

		ctx = session.Set(ctx, ss)

		resp, err = handler(ctx, req)

		log.Printf("method %s tooks %s error %v", info.FullMethod, time.Since(start), err)
		return resp, err
	})
}

func authorizeToken(ctx context.Context, uri string) (*session.Session, error) {

	if uri == "/svc.Auth/Login" {
		return nil, nil
	}

	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, meta.ErrorInternalServer(fmt.Errorf("missing metadata"))
	}

	values := md["authorization"]
	if len(values) == 0 {
		return nil, meta.ErrorInvalidSession()
	}

	accessToken := values[0]

	tokenStr := strings.ReplaceAll(accessToken, "Bearer ", "")
	claim := &jwt.StandardClaims{}
	token, err := jwt.ParseWithClaims(tokenStr, claim, func(t *jwt.Token) (interface{}, error) {
		return config.Get().JWTSecretKey, nil
	})
	if err != nil {
		if err == jwt.ErrSignatureInvalid {
			return nil, meta.ErrorInvalidSession()
		}
		return nil, meta.ErrorInvalidSession()
	}

	if !token.Valid {
		return nil, meta.ErrorSessionExpired()
	}

	var ss = &session.Session{
		UserID:   claim.Audience,
		Token:    tokenStr,
		ExpireAt: helper.TimeFromUnixTimeStamp(claim.ExpiresAt),
	}

	return ss, nil
}
