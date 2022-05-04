protogen:
	protoc ./proto/svc/**/*.proto --go-grpc_out=.. --go_out=.. --grpc-web_out=import_style=typescript,mode=grpcwebtext:./web/src --js_out=import_style=commonjs:./web/src
	protoc ./proto/svc/*.proto --go-grpc_out=.. --go_out=.. --grpc-web_out=import_style=typescript,mode=grpcwebtext:./web/src --js_out=import_style=commonjs:./web/src

docker-build-frontend:
	docker build -f web/Dockerfile -t parrot-web web/.

docker-build-backend:
	docker build -f Dockerfile -t parrot-service .

docker-build-all: docker-build-frontend docker-build-backend

docker-start-frontend:
	docker run -it -p 3000:3000 parrot-web

docker-start-backend:
	docker-compose up parrot-service parrot-db parrot-proxy

docker-start-all:
	docker-compose up

docker-build-start-all: docker-build-all docker-start-all

start-local-db:
	sudo service mysql start

start-local-backend: start-local-db
	go run cmd/main.go -resetdb

start-backend: start-local-db
	go run cmd/main.go

start-frontend:
	cd web && npm start

open-proxyserv-sh:
	docker exec -it parrot-proxy /bin/bash