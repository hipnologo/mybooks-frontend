import axios from 'axios'
import {decode, encode} from 'base-64'

const BASE_REST_API_URL = 'http://localhost:8080/api/v1/authors';
const USER = 'admin'
const PASSWORD = 'senha123'
const TOKEN = `${USER}:${PASSWORD}`;
const ENCODEDTOKEN = encode(TOKEN);

class AuthorService{

    async getAllAuthors() {
        return await axios.get(BASE_REST_API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    createAuthor(author) {
        return axios.post(BASE_REST_API_URL, {
            author,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    getAuthorById(authorId) {
        return axios.get(BASE_REST_API_URL + '/' + authorId, {
                headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    updateAuthor(authorId, firstName, lastName) {
        return axios.put(BASE_REST_API_URL + '/' + authorId, {
            firstName,
            lastName,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    deleteAuthor(authorId) {
        return axios.delete(BASE_REST_API_URL + '/' + authorId, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }
}

export default new AuthorService();