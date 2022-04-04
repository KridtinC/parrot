package repository

import (
	"context"
	"fmt"
	"log"
	"parrot/internal/config"
	"parrot/internal/svc/entity"
	"parrot/pkg/db"
	"parrot/pkg/meta"
)

type BillRepository struct {
	DBConn *db.MySQLConnection
}

func NewBill(dbConn *db.MySQLConnection) *BillRepository {
	return &BillRepository{
		DBConn: dbConn,
	}
}

func (b *BillRepository) Get(ctx context.Context, billID string) (*entity.Bill, error) {

	var (
		bill   = &entity.Bill{}
		script = fmt.Sprintf("select * from %s.bill b where b.bill_id = ?", config.Get().DBConfig.Name)
	)

	result := b.DBConn.QueryRow(script, billID)

	err := result.Scan(&bill.BillID, &bill.PayerID, &bill.PayeeID, &bill.Amount, &bill.PayType)
	if err != nil {
		if meta.IsDBNotFoundError(err) {
			log.Printf("not found key %s", billID)
			return nil, fmt.Errorf("not found key %s", billID)
		}
		log.Printf("scan bill err %s key %s", err.Error(), billID)
		return nil, err
	}

	return bill, nil
}
