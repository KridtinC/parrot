protogen:
	protoc ./proto/svc/**/*.proto --go-grpc_out=.. --go_out=.. --grpc-web_out=import_style=typescript,mode=grpcwebtext:./web/src --js_out=import_style=commonjs:./web/src
	protoc ./proto/svc/*.proto --go-grpc_out=.. --go_out=.. --grpc-web_out=import_style=typescript,mode=grpcwebtext:./web/src --js_out=import_style=commonjs:./web/src

start-local-db:
	sudo service mysql start

start-local-backend: start-local-db
	go run cmd/main.go -resetdb

start-backend: start-local-db
	go run cmd/main.go

start-frontend:
	cd web && npm start

open-proxyserv-sh:
	docker exec -it parrot_proxy /bin/bash

start-proxyserv:
	docker-compose up

stop-proxyserv:
	docker-compose down