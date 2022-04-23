package meta

import (
	"database/sql"
	"reflect"
)

// IsDBNotFoundError check if db error is not found
func IsDBNotFoundError(err error) bool {
	return sql.ErrNoRows == err
}

// GetStructName get struct name
func GetStructName(obj interface{}) string {

	t := reflect.TypeOf(obj)

	if t.Kind() == reflect.Ptr {
		return t.Elem().Name()
	}
	return t.Name()

}
