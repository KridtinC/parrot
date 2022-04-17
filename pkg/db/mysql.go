package db

import (
	"database/sql"
	"fmt"
	"reflect"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

type MySQLConnection struct {
	*sql.DB
	DBName string
}

func Scan(result *sql.Row, x interface{}) error {

	val := reflect.ValueOf(x).Elem()

	v := make([]interface{}, val.NumField())

	for i := 0; i < val.NumField(); i++ {
		valueField := val.Field(i)
		v[i] = valueField.Addr().Interface()
	}

	return result.Scan(v...)
}

// OpenMySQLConnection open mysql connection
func OpenMySQLConnection(ip, port, username, password, dbName string) (*MySQLConnection, error) {

	var connstr = fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", username, password, ip, port, dbName)

	db, err := sql.Open("mysql", connstr)
	if err != nil {
		return nil, err
	}

	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return &MySQLConnection{
		DB:     db,
		DBName: dbName,
	}, nil
}
