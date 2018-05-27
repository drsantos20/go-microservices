package service

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/go-microservices/goblog/accountservice/model"

	"github.com/go-microservices/goblog/accountservice/dbclient"
	"github.com/gorilla/mux"
)

var DBClient dbclient.IBoltClient

func GetAccountById(w http.ResponseWriter, r *http.Request) {

	// Read the 'accountId' path parameter from the mux map
	var accountId = mux.Vars(r)["accountId"]

	// Read the account struct BoltDB
	account, err := DBClient.QueryAccount(accountId)

	// If err, return a 404
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	// If found, marshal into JSON, write headers and content
	data, _ := json.Marshal(account)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Length", strconv.Itoa(len(data)))
	w.WriteHeader(http.StatusOK)
	w.Write(data)
}

func CreateAccount(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var t model.Account
	error := decoder.Decode(&t)
	if error != nil {
		panic(error)
	}
	defer r.Body.Close()
	log.Println(t.Name)

	var account model.Account

	account.Id = r.FormValue("id")
	//account.Name = r.FormValue("Name")

	println("before create ", account.Id, account.Name)
	account, err := DBClient.CreateAccount(account)

	if err != nil {
		w.WriteHeader(http.StatusNotFound)
	}

	// If found, marshal into JSON, write headers and content
	data, _ := json.Marshal(account)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Length", strconv.Itoa(len(data)))
	w.WriteHeader(http.StatusOK)
	w.Write(data)

}

func GetAccount(w http.ResponseWriter, r *http.Request) {

	account, err := DBClient.RetrieveAllAccounts()

	// If err, return a 404
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	// If found, marshal into JSON, write headers and content
	data, _ := json.Marshal(account)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Length", strconv.Itoa(len(data)))
	w.WriteHeader(http.StatusOK)
	w.Write(data)

}
