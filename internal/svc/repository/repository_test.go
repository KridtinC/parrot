package repository

import (
	"context"
	"parrot/internal/config"
	"parrot/internal/session"
	"parrot/pkg/db"
)

func PrepareDB() *db.MySQLConnection {
	var (
		dbIP       = config.Get().DBConfig.IP
		dbPort     = config.Get().DBConfig.Port
		dbUserName = config.Get().DBConfig.UserName
		dbPassword = config.Get().DBConfig.Password
		dbName     = config.Get().DBConfig.Name
	)

	dbconn, err := db.OpenMySQLConnection(dbIP, dbPort, dbUserName, dbPassword, dbName)
	if err != nil {
		panic(err)
	}

	return dbconn
}

func ContextWithSession() context.Context {
	var ctx = context.Background()
	var ss = &session.Session{
		UserID: "kanktch",
		Token:  "test",
	}
	return session.Set(ctx, ss)
}
