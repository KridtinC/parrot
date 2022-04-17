package db

import (
	"io/ioutil"
	"log"
)

// ResetDB reset database and dump new data
// this operation SQL script is in sql folder
// only for dev env!
func ResetDB(conn *MySQLConnection) error {
	sqlScript, err := ioutil.ReadFile("./sql/schema/parrot.sql")
	if err != nil {
		log.Printf("read schema file err: %s", err.Error())
		return err
	}

	err = conn.ExecScripts(string(sqlScript))
	if err != nil {
		log.Printf("exec err: %s", err.Error())
		return err
	}

	return nil
}

// DumpDB dump data into db
func DumpDB(conn *MySQLConnection) error {
	sqlScript, err := ioutil.ReadFile("./sql/dump/user.sql")
	if err != nil {
		log.Printf("read dump file err: %s", err.Error())
		return err
	}

	err = conn.ExecScripts(string(sqlScript))
	if err != nil {
		log.Printf("exec err: %s", err.Error())
		return err
	}

	return nil
}
