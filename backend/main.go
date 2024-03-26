package main

import (
	"net/http"

	"github.com/AdamAlberty/personal-website/backend/db"
	"github.com/go-chi/chi/v5"
)

func init() {
	db.CreateConnection()
}

func main() {
	r := chi.NewRouter()
	r.Get("/api/posts", func(w http.ResponseWriter, r *http.Request) {

	})
	http.ListenAndServe(":3000", r)
}
