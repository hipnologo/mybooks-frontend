import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import BookService from '../services/BookService'

const ListBooksComponents = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
      getAllBooks();
    }, [])

    const getAllBooks = () => {
        setLoading(true)
        BookService.getAllBooks().then((response) => {
            setBooks(response.data)
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    const deleteBook = (bookId) => {
        BookService.deleteBook(bookId)
            .then((response) => {
                getAllBooks();
            }).catch(error => {
            console.log(error)
        })
    }

    if (error || !Array.isArray(books)) {
        return <p>There was an error loading your data!</p>;}

  return (
    <div className="container">
        <h2 className='text-center'>MyBooks</h2> 
        <Link to = "/manage-books" className='btn btn-primary mb-2'> Add Book</Link>

        {loading ? <p>Loading...</p> :

            <table className='table table-bordered table-striped'>
                <thead>
                <th> Book Id</th>
                <th> ISBN</th>
                <th> Book Title</th>
                <th> Book Subtitle</th>
                <th> Author</th>
                <th> Publisher</th>
                <th> Language</th>
                <th> Format</th>
                <th> Year</th>
                <th> Category</th>
                <th> Actions</th>
                </thead>
                <tbody>
                {
                    books.map(
                        book =>
                            <tr key={book.id}>
                                <td> {book.id}</td>
                                <td> {book.isbn}</td>
                                <td> {book.bookTitle}</td>
                                <td> {book.bookSubtitle}</td>
                                <td> {book.authorName}</td>
                                <td> {book.publisher}</td>
                                <td> {book.idLanguage}</td>
                                <td> {book.bookFormat}</td>
                                <td> {book.publicationYear}</td>
                                <td> {book.bookCategory}</td>
                                <td>
                                    <Link className='btn btn-info' to={'/manage-books/' + book.id}>Update</Link>
                                    <button className='btn btn-danger' onClick={() => deleteBook(book.id)}
                                            style={{marginLeft: "10px"}}>Delete
                                    </button>
                                </td>
                            </tr>
                    )
                }

                </tbody>
            </table>
        }
    </div>
  )
}

export default ListBooksComponents