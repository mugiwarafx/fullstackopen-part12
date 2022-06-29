FROM golang

WORKDIR /app

COPY go.mod .
COPY go.sum .

RUN go mod tidy

COPY . .

RUN go build -o main

EXPOSE 8000

CMD [ "./main" ]