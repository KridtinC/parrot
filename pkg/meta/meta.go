package meta

import "database/sql"

func IsDBNotFoundError(err error) bool {
	return sql.ErrNoRows == err
}
