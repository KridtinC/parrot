package repository

import (
	"context"
	"fmt"
	"log"
	"parrot/internal/svc/entity"
	"parrot/pkg/db"
	"parrot/pkg/meta"
)

// BillRepository repository for bill
type BillRepository struct {
	DBConn *db.MySQLConnection
}

// NewBill new repository for bill
func NewBill(dbConn *db.MySQLConnection) *BillRepository {
	return &BillRepository{
		DBConn: dbConn,
	}
}

// Get get bill entity from database
func (b *BillRepository) Get(ctx context.Context, billID string) (*entity.Bill, error) {

	var (
		bill        = &entity.Bill{}
		queryString = fmt.Sprintf("select * from %s.bill b where b.bill_id = ?;", b.DBConn.DBName)
	)

	result := b.DBConn.QueryRowContext(ctx, queryString, billID)

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

// Create create bill entity from database
func (b *BillRepository) Create(ctx context.Context, bill *entity.Bill) error {

	var queryString = fmt.Sprintf("insert into %s.bill values (?, ?, ?, ?, ?);", b.DBConn.DBName)

	if bill == nil {
		log.Println("cannot insrt empty bill")
		return fmt.Errorf("cannot insert empty bill")
	}

	_, err := b.DBConn.ExecContext(ctx, queryString, bill.BillID, bill.PayerID, bill.PayeeID, bill.Amount, bill.PayType)
	if err != nil {
		log.Printf("cannot insert bill id %s err %s", bill.BillID, err.Error())
		return err
	}

	return nil
}
