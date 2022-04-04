protogen:
	protoc ./proto/svc/**/*.proto --go-grpc_out=.. --go_out=..
	protoc ./proto/svc/*.proto --go-grpc_out=.. --go_out=..