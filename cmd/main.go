package main

import (
	"fmt"
	"log"
	"net"
	"parrot/internal/config"
	"parrot/internal/svc"
)

var (
	basePathURL = config.Get().BasePathURL
	appPort     = config.Get().AppPort
)

func main() {
	listener, err := net.Listen("tcp", fmt.Sprintf("%s:%s", basePathURL, appPort))
	if err != nil {
		log.Fatal(err)
	}

	grpcServ := svc.NewService()

	log.Printf("listen at %s:%s", basePathURL, appPort)
	if err := grpcServ.Serve(listener); err != nil {
		log.Fatal(err)
	}
}
