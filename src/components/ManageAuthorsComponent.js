import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate, Link, useParams } from 'react-router-dom';
import AuthorService from "../services/AuthorService";


const ManageAuthorComponent = () => {
    //const [id, setId] = useState('');
    const {id} = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();
    //const history = useHistory();

    const saveOrUpdateAuthor = (e) => {
        e.preventDefault();

        const authorData = {id, firstName, lastName}

        if(id){
            AuthorService.updateAuthor(id, firstName, lastName).then((response) => {
                console.log(response.data)
                AuthorService.updateAuthor(firstName, lastName)
                navigate("/authors");
                //history.push('/authors');
            }).catch(error =>{
                console.log(error);
            })
        }else{
            AuthorService.createAuthor(authorData).then((response) => {
                console.log(response.data)
                AuthorService.createAuthor(response.data)
                navigate("/authors");
                //history.push('/authors');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        AuthorService.getAuthorById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
        }).catch(error => {
            console.log(error)
        })
    })


  const title = () => {
    if(id){
        return <h2 className='text-center'> Update Author</h2>
    } else {
        return <h2 className='text-center'> Add Author</h2>
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

                            <label className='form-label'> First Name: </label>
                            <input
                                type = "text"
                                placeholder='Enter Author First Name'
                                name = "firstName"
                                className='form-control'
                                value = {firstName}
                                onChange = {(e) => setFirstName(e.target.value)}
                            ></input>

                            <label className='form-label'> Last Name: </label>
                            <input
                                type = "text"
                                placeholder='Enter Author LAst Name'
                                name = "lastName"
                                className='form-control'
                                value = {lastName}
                                onChange = {(e) => setLastName(e.target.value)}
                            ></input>
                           
                        </div>

                        <button className='btn btn-success' onClick={(e) => saveOrUpdateAuthor(e)}>Save</button>
                        <Link to="/authors" className='btn btn-danger'
                              style = {{marginLeft: "10px"}}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageAuthorComponent