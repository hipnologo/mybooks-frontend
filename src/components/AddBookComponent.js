import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate, Link, useParams } from 'react-router-dom';
import BookService from '../services/BookService';


const AddBookComponent = () => {
    const [isbn, setISBN] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [bookSubtitle, setBookSubtitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [publisher, setPublisher] = useState('');
    const [idLanguage, setIdLanguage] = useState('');
    const [bookFormat, setBookFormat] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [bookCategory, setBookCategory] = useState('');

    const navigate = useNavigate();
    //const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateBook = (e) => {
        e.preventDefault();

        const book = {isbn, bookTitle, bookSubtitle, authorName, publisher, idLanguage, bookFormat, publicationYear, bookCategory}

        if(id){
            BookService.updateBook(id, book).then((response) => {
                console.log(response.data)
                navigate("/mybooks");
                //history.push('/mybooks');
            }).catch(error =>{
                console.log(error);
            })
        }else{
            BookService.createBook(book).then((response) => {
                console.log(response.data)
                navigate("/mybooks");
                //history.push('/mybooks');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        BookService.getBookById(id).then((response) => {
            setISBN(response.data.isbn)
            setBookTitle(response.data.bookTitle)
            setBookSubtitle(response.data.bookSubtitle)
            setBookFormat(response.data.bookFormat)
            setIdLanguage(response.data.idLanguage)
        }).catch(error => {
            console.log(error)
        })
    })


  const title = () => {
    if(id){
        return <h2 className='text-center'> Update Book</h2>
    } else {
        return <h2 className='text-center'> Add Book</h2>
    }
  }

  return (
    <div>
        <h1><p></p></h1>

        <div className='container'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    title()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'> ISBN: </label>
                            <input
                                type = "text"
                                placeholder='Enter ISBN'
                                name = "isbn"
                                className='form-control'
                                value = {isbn}
                                onChange = {(e) => setISBN(e.target.value)}
                            ></input>

                            <label className='form-label'> Book Title: </label>
                            <input
                                type = "text"
                                placeholder='Enter Book Title'
                                name = "bookTitle"
                                className='form-control'
                                value = {bookTitle}
                                onChange = {(e) => setBookTitle(e.target.value)}
                            ></input>

                            <label className='form-label'> Book Sub-title: </label>
                            <input
                                type = "text"
                                placeholder='Enter Book Subtitle'
                                name = "bookSubtitle"
                                className='form-control'
                                value = {bookSubtitle}
                                onChange = {(e) => setBookSubtitle(e.target.value)}
                            ></input>

                            <label className='form-label'> Author Name: </label>
                            <input
                                type = "text"
                                placeholder='Enter Author Name'
                                name = "authorName"
                                className='form-control'
                                value = {authorName}
                                onChange = {(e) => setAuthorName(e.target.value)}
                            ></input>

                            <label className='form-label'> Publisher: </label>
                            <input
                                type = "text"
                                placeholder='Enter Publisher'
                                name = "publisher"
                                className='form-control'
                                value = {publisher}
                                onChange = {(e) => setPublisher(e.target.value)}
                            ></input>

                            <label className='form-label'> Language: </label>
                            <select id="idLanguage" 
                                    name="idLanguage" 
                                    placeholder='Select Language' 
                                    className='form-control'
                                    value={idLanguage}
                                    onChange = {(e) => setIdLanguage(e.target.value)}>
                                <option value="1">English</option>
                                <option value="2">Português</option>
                                <option value="3">Español</option>
                                <option value="10">Sem Idioma</option>
                            </select>

                            <label className='form-label'> Book Format: </label>
                            <select id="bookFormat" 
                                    name="bookFormat" 
                                    placeholder='Enter Book Format' 
                                    className='form-control'
                                    value={bookFormat}
                                    onChange = {(e) => setBookFormat(e.target.value)}>
                                <option value="Paperback">Paperback</option>
                                <option value="Hardcover">Hardcover</option>
                                <option value="ebook">E-book</option>
                                <option value="Audiobook">Audiobook</option>
                            </select>

                            <label className='form-label'> Year: </label>
                            <input
                                type = "text"
                                placeholder='Enter Publication Year'
                                name = "publicationYear"
                                className='form-control'
                                value = {publicationYear}
                                onChange = {(e) => setPublicationYear(e.target.value)}
                            ></input>

                            <label className='form-label'> Category: </label>
                            <input
                                type = "text"
                                placeholder='Enter Book Category'
                                name = "bookCategory"
                                className='form-control'
                                value = {bookCategory}
                                onChange = {(e) => setBookCategory(e.target.value)}
                            ></input>
                           
                        </div>

                        <button className='btn btn-success' onClick={(e) => saveOrUpdateBook(e)}>Save</button>
                        <Link to="/mybooks" className='btn btn-danger'
                              style = {{marginLeft: "10px"}}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBookComponent