from golang as builder

WORKDIR /app
ADD . .
RUN go build -o /usr/local/bin/main

EXPOSE 8000
CMD ["/usr/local/bin/main"]