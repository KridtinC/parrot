package svc

import (
	"log"
	"parrot/internal/config"
	"parrot/internal/svc/endpoint"
	"parrot/internal/svc/repository"
	"parrot/internal/svc/usecase"
	"parrot/pkg/db"
	"parrot/proto/svc"

	"google.golang.org/grpc"
)

var (
	dbIP       = config.Get().DBConfig.IP
	dbPort     = config.Get().DBConfig.Port
	dbUserName = config.Get().DBConfig.UserName
	dbPassword = config.Get().DBConfig.Password
	dbName     = config.Get().DBConfig.Name
)

// NewService new grpc service and register endpoint
func NewService() *grpc.Server {
	// init grpc server
	grpcServ := grpc.NewServer()

	// init db connection
	dbconn, err := db.OpenMySQLConnection(dbIP, dbPort, dbUserName, dbPassword, dbName)
	if err != nil {
		log.Fatal(err)
	}

	// init instace for services
	billRepository := repository.NewBill(dbconn)
	billUseCase := usecase.NewBill(billRepository)
	billEndpoint := endpoint.NewBillEndpoint(billUseCase)
	svc.RegisterBillServer(grpcServ, billEndpoint)

	return grpcServ
}
