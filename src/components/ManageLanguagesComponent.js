import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate, Link, useParams } from 'react-router-dom';
import LanguageService from "../services/LanguageService";


const ManageLanguageComponent = () => {
    //const [id, setId] = useState('');
    const {id} = useParams();
    const [language, setLanguage] = useState('');

    const navigate = useNavigate();
    //const history = useHistory();

    const saveOrUpdateLanguage = (e) => {
        e.preventDefault();

        const languageData = {id, language}

        if(id){
            LanguageService.updateLanguage(id, language).then((response) => {
                console.log(response.data)
                navigate("/languages");
                //history.push('/languages');
            }).catch(error =>{
                console.log(error);
            })
        }else{
            LanguageService.createLanguage(languageData).then((response) => {
                console.log(response.data)
                navigate("/languages");
                //history.push('/languages');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        LanguageService.getLanguageById(id).then((response) => {
            setLanguage(response.data.language)
        }).catch(error => {
            console.log(error)
        })
    })


  const title = () => {
    if(id){
        return <h2 className='text-center'> Update Language</h2>
    } else {
        return <h2 className='text-center'> Add Language</h2>
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

                            <label className='form-label'> Language: </label>
                            <input
                                type = "text"
                                placeholder='Enter Language'
                                name = "language"
                                className='form-control'
                                value = {language}
                                onChange = {(e) => setLanguage(e.target.value)}
                            ></input>
                           
                        </div>

                        <button className='btn btn-success' onClick={(e) => saveOrUpdateLanguage(e)}>Save</button>
                        <Link to="/languages" className='btn btn-danger'
                              style = {{marginLeft: "10px"}}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageLanguageComponent