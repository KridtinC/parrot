package repository

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"parrot/internal/session"
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

// Get get bill entity from database (excluding payee list)
func (b *BillRepository) Get(ctx context.Context, billID string) (*entity.Bill, error) {

	var (
		bill        = &entity.Bill{}
		queryString = fmt.Sprintf("select * from %s.bill b where b.bill_id = ?;", b.DBConn.DBName)
	)

	result := b.DBConn.QueryRowContext(ctx, queryString, billID)

	err := db.ScanAll(result, bill)
	if err != nil {
		if meta.IsDBNotFoundError(err) {
			log.Printf("not found key %s", billID)
			return nil, err
		}
		log.Printf("scan bill err %s key %s", err.Error(), billID)
		return nil, err
	}

	return bill, nil
}

// GetInfo get bill including payee info entity from database
func (b *BillRepository) GetInfo(ctx context.Context, billID string) (*entity.BillInfo, error) {

	bill, err := b.Get(ctx, billID)
	if err != nil {
		return nil, err
	}

	var (
		billinfo = &entity.BillInfo{
			Bill:      bill,
			PayeeList: make([]*entity.PayeeInfo, 0),
		}
		queryString = fmt.Sprintf("select * from %s.bill_payment b where b.bill_id = ?;", b.DBConn.DBName)
	)

	result, err := b.DBConn.QueryContext(ctx, queryString, billID)
	if err != nil {
		log.Printf("cannot query, err %s", err.Error())
		return nil, err
	}

	var payee = &entity.PayeeInfo{}
	for {
		found := result.Next()
		if !found {
			if result.Err() != nil {
				log.Printf("cannot next record, err %s", err.Error())
				return nil, err
			}
			break
		}

		err = db.ScanAll(result, payee)
		if err != nil {
			if meta.IsDBNotFoundError(err) {
				log.Printf("not found payee for key %s", billID)
				return nil, err
			}
			log.Printf("scan bill payee info err %s key %s", err.Error(), billID)
			return nil, err
		}

		billinfo.PayeeList = append(billinfo.PayeeList, payee)
	}

	return billinfo, nil
}

// Create create bill entity from database
func (b *BillRepository) Create(ctx context.Context, bill *entity.BillInfo) error {

	var queryString = fmt.Sprintf("insert into %s.bill values (?, ?, ?, ?, ?, ?, ?);", b.DBConn.DBName)

	if bill == nil {
		log.Println("cannot insert empty bill")
		return fmt.Errorf("cannot insert empty bill")
	}

	_, err := b.DBConn.ExecContext(ctx, queryString, bill.BillID, bill.Amount, bill.Description, bill.PayType, bill.CreatedOn, bill.PayerID, bill.ReceiptID)
	if err != nil {
		log.Printf("cannot insert bill id %s err %s", bill.BillID, err.Error())
		return err
	}

	queryString = fmt.Sprintf("insert into %s.bill_payment values (?, ?, ?, ?);", b.DBConn.DBName)

	for _, payee := range bill.PayeeList {
		_, err := b.DBConn.ExecContext(ctx, queryString, payee.PayeeID, payee.BillID, payee.PaidOn, payee.IsPaid)
		if err != nil {
			log.Printf("cannot insert bill_payment id (%s, %s) err %s", payee.PayeeID, bill.BillID, err.Error())
			return err
		}
	}

	return nil
}

// GetAll get all bills entity from database (filter by only me flag)
func (b *BillRepository) GetAll(ctx context.Context, onlyMe bool) ([]*entity.Bill, error) {

	var (
		bills       = make([]*entity.Bill, 0)
		queryString string
		result      *sql.Rows
		err         error
	)

	if onlyMe {
		var ss = session.MustGet(ctx)
		queryString = fmt.Sprintf("select * from %s.bill b where payer_id = ?;", b.DBConn.DBName)
		result, err = b.DBConn.QueryContext(ctx, queryString, ss.UserID)
		if err != nil {
			log.Printf("cannot get all bills err %s", err.Error())
			return nil, err
		}
	} else {
		queryString = fmt.Sprintf("select * from %s.bill b;", b.DBConn.DBName)
		result, err = b.DBConn.QueryContext(ctx, queryString)
		if err != nil {
			log.Printf("cannot get all bills err %s", err.Error())
			return nil, err
		}
	}

	for {

		var bill = &entity.Bill{}
		if !result.Next() {
			break
		}

		err = db.ScanAll(result, bill)
		if err != nil {
			if meta.IsDBNotFoundError(err) {
				log.Printf("not found key %v", bill.Keys())
				return nil, err
			}
			log.Printf("scan bill err %s key %s", err.Error(), bill.Keys())
			return nil, err
		}

		bills = append(bills, bill)
	}

	return bills, nil
}
