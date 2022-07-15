import axios from 'axios'

const BOOKS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/mybooks';

class BookService{

    getAllBooks(){
        return axios.get(BOOKS_BASE_REST_API_URL)
    }

    createBook(book){
        return axios.post(BOOKS_BASE_REST_API_URL, book)
    }

    getBookById(bookId){
        return axios.get(BOOKS_BASE_REST_API_URL + '/' + bookId);
    }

    updateBook(bookId, book) {
        return axios.put(BOOKS_BASE_REST_API_URL + '/' + bookId, book);
    }

    deleteBook(bookId){
        return axios.delete(BOOKS_BASE_REST_API_URL + '/' + bookId);
    }
}

export default new BookService();