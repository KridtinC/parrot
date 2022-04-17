package repository

import (
	"context"
	"fmt"
	"log"
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
