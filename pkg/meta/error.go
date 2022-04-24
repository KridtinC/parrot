package meta

import (
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// ErrorEntityNotFound return grpc error not found entity
func ErrorEntityNotFound(obj interface{}, key ...interface{}) error {
	return status.Errorf(codes.NotFound, "%s with key %v not found", GetStructName(obj), key)
}

// ErrorInvalidUserPass return grpc error invalid credential
func ErrorInvalidUserPass() error {
	return status.Error(codes.Unauthenticated, "Invalid username or password")
}

// ErrorInternalServer return unexpected error
func ErrorInternalServer(err error) error {
	return status.Errorf(codes.Internal, "Internal Server Error: %s", err.Error())
}

// ErrorPayeeNotFound return if payee is not in db
func ErrorPayeeNotFound(payeeID string) error {
	return status.Errorf(codes.NotFound, "Payee %s not found", payeeID)
}

// ErrorInvalidSession session found, but invalid
func ErrorInvalidSession() error {
	return status.Error(codes.Unauthenticated, "Invalid session")
}

// ErrorSessionExpired session already expired
func ErrorSessionExpired() error {
	return status.Error(codes.Unauthenticated, "Session expired, please login again")
}

// ErrorMissingField return missing field error
func ErrorMissingField(fieldName string) error {
	return status.Errorf(codes.InvalidArgument, "Missing field: %s", fieldName)
}
