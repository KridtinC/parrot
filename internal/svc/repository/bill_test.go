package repository

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_GetAllBills(t *testing.T) {
	var (
		dbConn   = PrepareDB()
		ctx      = ContextWithSession()
		billRepo = NewBill(dbConn)
	)

	bills, err := billRepo.GetAll(ctx, true)
	if err != nil {
		t.Error(err)
	}

	assert.Equal(t, 0, len(bills))
}
