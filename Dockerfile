FROM golang:1.18.1-alpine
WORKDIR /app/parrot
COPY . .
RUN go mod download
RUN go build -o parrot-service ./cmd/main.go
EXPOSE 8080
CMD ./parrot-service