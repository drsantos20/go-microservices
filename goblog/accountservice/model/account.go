package model

type Account struct {
	Id       string    `json:"id"`
	Name     string    `json:"name"`
	Login    string    `json:"login"`
	Accounts []Account `json:"accounts"`
}
