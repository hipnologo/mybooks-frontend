import axios from 'axios'
import {decode, encode} from 'base-64'

const BASE_REST_API_URL = process.env.REACT_APP_AUTHORS_BASE_REST_API_URL
const USER = process.env.REACT_APP_REST_API_USER
const PASSWORD = process.env.REACT_APP_REST_API_PASSWORD
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