import axios from 'axios'
import {decode, encode} from 'base-64'

const BASE_REST_API_URL = process.env.REACT_APP_BOOKS_BASE_REST_API_URL
const USER = process.env.REACT_APP_REST_API_USER
const PASSWORD = process.env.REACT_APP_REST_API_PASSWORD
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
            url: BASE_REST_API_URL,
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
        return await axios.get(BASE_REST_API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })/*.then(res => {
            console.log(typeof res);
            console.log(res);
            //console.log(JSON.stringify(res.data));
            //console.log(res.headers['Authorization']);
        })
            .catch(err => {
                console.log(err);
            })*/
    }

    createBook(book) {
        return axios.post(BASE_REST_API_URL, book)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    getBookById(bookId){
        return axios.get(BASE_REST_API_URL + '/' + bookId)
            .then(res => {
            console.log(res);
        })
            .catch(err =>{
                console.log(err);
            });
    }

    updateBook(bookId, book) {
        return axios.put(BASE_REST_API_URL + '/' + bookId, book)
            .then(res => {
                console.log(res);
            })
            .catch(err =>{
                console.log(err);
            });
    }

    deleteBook(bookId){
        return axios.delete(BASE_REST_API_URL + '/' + bookId)
            .then(res => {
                console.log(res);
            })
            .catch(err =>{
                console.log(err);
            });
    }
}

export default new BookService();