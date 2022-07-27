import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AuthorService from '../services/AuthorService'

const ListAuthorsComponents = () => {

    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
      getAllAuthors();
    }, [])

    const getAllAuthors = () => {
        setLoading(true);
        AuthorService.getAllAuthors()
            .then((response) => {
                setAuthors(response.data);
            }).catch(error => {
            console.log(error);
        })
            .finally(() => {
                setLoading(false);
            });
    }

    const deleteAuthor = (authorId) => {
        AuthorService.deleteAuthor(authorId)
            .then((response) => {
                getAllAuthors();
            }).catch(error => {
            console.log(error)
        })
    }

    if (error || !Array.isArray(authors)) {
        return <p>There was an error loading your data!</p>;}

  return (
    <div className="container">
        <h2 className='text-center'>Book Authors</h2>
        <Link to = "/manage-authors" className='btn btn-primary mb-2'> Add Author</Link>

        {loading ? <p>Loading...</p> :

            <table className='table table-bordered table-striped'>
            <thead>
            <th> ID</th>
            <th> First Name</th>
            <th> Last Name</th>
            <th> Actions</th>
            </thead>
            <tbody>
        {
            authors.map(
            author =>
            <tr key = {author.id}>
            <td> {author.id}</td>
            <td> {author.firstName}</td>
            <td> {author.lastName}</td>
            <td>
            <Link className='btn btn-info' to={'/manage-authors/'+author.id}>Update</Link>
            <button className='btn btn-danger' onClick={() => deleteAuthor(author.id)}
            style = {{marginLeft: "10px"}}>Delete </button>
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

export default ListAuthorsComponents