package svc

import (
	"flag"
	"log"
	"parrot/internal/config"
	"parrot/internal/middleware"
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
	grpcServ := grpc.NewServer(middleware.AuthorizationInterceptor())

	// init db connection
	dbconn, err := db.OpenMySQLConnection(dbIP, dbPort, dbUserName, dbPassword, dbName)
	if err != nil {
		log.Fatal(err)
	}

	var resetDB bool
	flag.BoolVar(&resetDB, "resetdb", false, "true: reset db")
	flag.Parse()

	// resetDB use only in dev env
	if resetDB && config.Get().Environment == config.EnvDEV {
		err := db.ResetDB(dbconn)
		if err != nil {
			log.Fatal(err)
		}
		err = db.DumpDB(dbconn)
		if err != nil {
			log.Fatal(err)
		}

	}

	// init instace for services
	billRepository := repository.NewBill(dbconn)
	billUseCase := usecase.NewBill(billRepository)
	billEndpoint := endpoint.NewBill(billUseCase)

	userRepository := repository.NewUser(dbconn)
	userUseCase := usecase.NewUser(userRepository)
	userEndpoint := endpoint.NewUser(userUseCase)

	authUseCase := usecase.NewAuth(userRepository)
	authEndpoint := endpoint.NewAuth(authUseCase)

	svc.RegisterBillServer(grpcServ, billEndpoint)
	svc.RegisterUserServer(grpcServ, userEndpoint)
	svc.RegisterAuthServer(grpcServ, authEndpoint)

	return grpcServ
}
