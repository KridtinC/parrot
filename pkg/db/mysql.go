package db

import (
	"database/sql"
	"fmt"
	"log"
	"reflect"
	"strings"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

type MySQLConnection struct {
	*sql.DB
	DBName string
}

// Scannable interface for struct can be scanned
type Scannable interface {
	Scan(dest ...interface{}) error
}

// ScanAll scan result into struct with all fields
func ScanAll(result Scannable, x interface{}) error {

	val := reflect.ValueOf(x).Elem()

	v := make([]interface{}, val.NumField())

	for i := 0; i < val.NumField(); i++ {
		valueField := val.Field(i)
		v[i] = valueField.Addr().Interface()
	}

	return result.Scan(v...)
}

// ExecScripts execute multiple scripts from single string
// Note: script string should have ; between each script
func (m *MySQLConnection) ExecScripts(sqlScript string) error {
	scripts := strings.Split(sqlScript, ";")

	for _, script := range scripts {
		if len(script) == 0 {
			continue
		}
		_, err := m.Exec(script)
		if err != nil {
			return err
		}
	}

	return nil
}

// OpenMySQLConnection open mysql connection
func OpenMySQLConnection(ip, port, username, password, dbName string) (*MySQLConnection, error) {

	var (
		connstr       = fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true", username, password, ip, port, dbName)
		maxRetryTimes = 5
		sleepTime     = time.Second * 3
		db            *sql.DB
		err           error
	)

	log.Printf("start connection with parrot-db on url %s:%s", ip, port)

	db, err = sql.Open("mysql", connstr)
	if err != nil {
		return nil, err
	}

	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

	for retry := 0; retry < maxRetryTimes; retry++ {
		if retry == maxRetryTimes {
			break
		}

		err = db.Ping()
		if err == nil {
			log.Printf("connection was successful")
			break
		}

		log.Printf("connection failed, sleep %s before retry time: %d", sleepTime, retry)
		time.Sleep(sleepTime)
	}

	if err != nil {
		return nil, err
	}

	return &MySQLConnection{
		DB:     db,
		DBName: dbName,
	}, nil
}
