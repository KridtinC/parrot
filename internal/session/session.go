package session

import (
	"context"
	"time"
)

type sessionContextKey struct{}

var defaultSessionContextKey = sessionContextKey{}

type Session struct {
	UserID   string
	Token    string
	ExpireAt time.Time
}

// Set set session to context
func Set(ctx context.Context, session *Session) context.Context {
	return context.WithValue(ctx, defaultSessionContextKey, session)
}

// MustGet return session from context. If no session, panic
func MustGet(ctx context.Context) *Session {
	ss, ok := ctx.Value(defaultSessionContextKey).(*Session)
	if !ok {
		panic("session required")
	}
	return ss
}
