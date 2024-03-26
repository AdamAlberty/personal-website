package db

import (
	"log"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var DB *sqlx.DB

func CreateConnection() {
	db, err := sqlx.Connect("postgres", "user=postgres dbname=yourdatabase sslmode=disable password=yourpassword host=localhost")
	if err != nil {
		log.Fatalln(err)
	}
	DB = db
}
