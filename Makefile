protogen:
	protoc ./proto/svc/**/*.proto --go-grpc_out=.. --go_out=..
	protoc ./proto/svc/*.proto --go-grpc_out=.. --go_out=..

start-local-db:
	sudo service mysql start

start-local-backend: start-local-db
	go run cmd/main.go -resetdb

start-backend: start-local-db
	go run cmd/main.go