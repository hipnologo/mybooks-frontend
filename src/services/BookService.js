import axios from 'axios'
import {decode, encode} from 'base-64'

const BOOKS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/mybooks'
const USER = 'admin'
const PASSWORD = 'senha123'
const PASSBASE64 = '$2a$10$8/FbKTtcU5Dg0n0gtd2Sy.q1AsNJFm6x/cEBpGmmODh2FSbKttvw2'
const TOKEN = `${USER}:${PASSWORD}`;
const ENCODEDTOKEN = encode(TOKEN);

class BookService{
/*
    getAllBooks() {

        var username = USER;
        var password = PASSWORD

        const token = `${username}:${password}`;
        const encodedToken = encode(token);
        console.log("encodedToken: " + encodedToken + " Deveria ser: dXNlcjpzZW5oYTEyMw==");

        var config = {
            method: 'GET',
            url: BOOKS_BASE_REST_API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + encodedToken
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
*/
    async getAllBooks() {
        return await axios.get(BOOKS_BASE_REST_API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        }).then(res => {
                console.log(res);
                //console.log(JSON.stringify(res.data));
                //console.log(res.headers['Authorization']);
            })
            .catch(err =>{
                console.log(err);
            })
    }

    createBook(book){
        return axios.post(BOOKS_BASE_REST_API_URL, book)
            .then(res => {
            console.log(res);
        })
            .catch(err =>{
                console.log(err);
            })
    }

    getBookById(bookId){
        return axios.get(BOOKS_BASE_REST_API_URL + '/' + bookId)
            .then(res => {
            console.log(res);
        })
            .catch(err =>{
                console.log(err);
            });
    }

    updateBook(bookId, book) {
        return axios.put(BOOKS_BASE_REST_API_URL + '/' + bookId, book)
            .then(res => {
                console.log(res);
            })
            .catch(err =>{
                console.log(err);
            });
    }

    deleteBook(bookId){
        return axios.delete(BOOKS_BASE_REST_API_URL + '/' + bookId)
            .then(res => {
                console.log(res);
            })
            .catch(err =>{
                console.log(err);
            });
    }
}

export default new BookService();