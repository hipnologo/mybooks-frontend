import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import LanguageService from '../services/LanguageService'

const ListLanguagesComponents = () => {

    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
      getAllLanguages();
    }, [])

    const getAllLanguages = () => {
      setLoading(true);
      LanguageService.getAllLanguages()
      .then((response) => {
        setLanguages({languages: response.data});
        console.log(response.data);
      }).catch(error =>{
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }
    
    const deleteLanguage = (languageId) => {
      LanguageService.deleteLanguage(languageId)
      .then((response) => {
        getAllLanguages();
      }).catch(error => {
        console.log(error)
      })
    }

    if (loading) {
      return <p>Data is loading...</p>;
    }

    if (error || !Array.isArray(languages)) {
      return <p>There was an error loading your data!</p>;
    }
  

  return (
    <div className="container">
        <h2 className='text-center'>Book Languages</h2>
        <Link to = "/manage-languages" className='btn btn-primary mb-2'> Add Language</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th> Language Id</th>
                <th> Language</th>
                <th> Actions</th>
            </thead>
            <tbody>
                {
                    languages.map(
                        (language) =>
                        <tr key = {language?.id}>
                            <td> {language?.id}</td>
                            <td> {language?.language}</td>
                            <td>
                                 <Link className='btn btn-info' to={'/manage-languages/'+language.id}>Update</Link>
                                 <button className='btn btn-danger' onClick={() => deleteLanguage(language.id)}
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

export default ListLanguagesComponents