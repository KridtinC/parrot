package repository

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_GetAllUserIDs(t *testing.T) {
	var (
		dbConn   = PrepareDB()
		userRepo = NewUser(dbConn)
	)

	userIDs, err := userRepo.GetAllUserIDs(context.Background())
	if err != nil {
		t.Error(err)
	}
	assert.Equal(t, 4, len(userIDs))
}
