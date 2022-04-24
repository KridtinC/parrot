package repository

import (
	"context"
	"fmt"
	"log"
	"parrot/internal/session"
	"parrot/internal/svc/entity"
	"parrot/pkg/db"
	"parrot/pkg/meta"
)

// UserRepository repository for store/gather user data
type UserRepository struct {
	DBConn *db.MySQLConnection
}

// NewUser new user repository instance
func NewUser(dbConn *db.MySQLConnection) *UserRepository {
	return &UserRepository{
		DBConn: dbConn,
	}
}

// Get get user by id
func (u *UserRepository) Get(ctx context.Context, userID string) (*entity.User, error) {
	var (
		user        = &entity.User{}
		queryString = fmt.Sprintf("select * from %s.user where user_id = ?;", u.DBConn.DBName)
	)

	result := u.DBConn.QueryRowContext(ctx, queryString, userID)

	err := db.ScanAll(result, user)
	if err != nil {
		if meta.IsDBNotFoundError(err) {
			log.Printf("not found key %s", userID)
			return nil, err
		}
		log.Printf("scan bill err %s key %s", err.Error(), userID)
		return nil, err
	}

	return user, nil
}

// GetAllUserIDs get all users only by id
func (u *UserRepository) GetAllUserIDs(ctx context.Context) ([]string, error) {
	var (
		userIDs     = []string{}
		queryString = fmt.Sprintf("select user_id from %s.user;", u.DBConn.DBName)
		ss          = session.MustGet(ctx)
	)

	result, err := u.DBConn.QueryContext(ctx, queryString)

	var userID string
	for {
		if !result.Next() {
			break
		}

		err = result.Scan(&userID)
		if err != nil {
			log.Printf("cannot scan result user id %s", userID)
			return nil, err
		}

		if userID == ss.UserID {
			// excluding yourself
			continue
		}

		userIDs = append(userIDs, userID)
	}

	return userIDs, nil
}
