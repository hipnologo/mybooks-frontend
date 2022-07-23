import axios from 'axios'
import {decode, encode} from 'base-64'
//import * as https from "https";

const BOOKS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/mybooks'
const BOOKS_FRONTEND_URI = 'http://localhost:3000'
const USER = 'admin'
const PASSWORD = 'senha123'
const PASSBASE64 = '$2a$10$8/FbKTtcU5Dg0n0gtd2Sy.q1AsNJFm6x/cEBpGmmODh2FSbKttvw2'

class BookService{

    getAllBooks() {

        var username = USER;
        var password = PASSWORD

        const token = `${username}:${password}`;
        console.log(token);
        const encodedToken = encode(token); //Buffer.from(token).toString('base64');
        const session_url = BOOKS_BASE_REST_API_URL;

        var config = {
            method: 'get',
            url: session_url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
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
/*
    getAllBooks(){
        axios.get(BOOKS_BASE_REST_API_URL, {
            auth: {
                username: USER,
                password: PASSWORD
            }
        }).then(res => {
                console.log(res);
                console.log(JSON.stringify(res.data));
                console.log(res.headers['Authorization']);
            })
            .catch(err =>{
                console.log(err);
            })
    }
*/
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