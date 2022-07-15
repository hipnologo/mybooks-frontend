import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import BookService from '../services/BookService'

const ListBooksComponents = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
      getAllBooks();
    }, [])

    const getAllBooks = () => {
      BookService.getAllBooks().then((response) => {
        setBooks(response.data)
        console.log(response.data);
      }).catch(error =>{
        console.log(error);
      })
    }
    
    const deleteBook = (bookId) => {
      BookService.deleteBook(bookId).then((response) => {
        getAllBooks();
      }).catch(error => {
        console.log(error)
      })
    }

  return (
    <div className="container">
        <h2 className='text-center'>MyBooks</h2> 
        <Link to = "/add-book" className='btn btn-primary mb-2'> Add Book</Link>
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
                        <tr key = {book.id}>
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
                                 <Link className='btn btn-info' to={'/edit-book/'+book.id}>Update</Link>
                                 <button className='btn btn-danger' onClick={() => deleteBook(book.id)}
                                 style = {{marginLeft: "10px"}}>Delete </button>
                            </td>
                        </tr>
                    )
                }

            </tbody>
        </table>
    </div>
  )
}

export default ListBooksComponents