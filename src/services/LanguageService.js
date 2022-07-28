import axios from 'axios'
import {decode, encode} from 'base-64'

const BASE_REST_API_URL = process.env.REACT_APP_LANGUAGES_BASE_REST_API_URL
const USER = process.env.REACT_APP_REST_API_USER
const PASSWORD = process.env.REACT_APP_REST_API_PASSWORD
const TOKEN = `${USER}:${PASSWORD}`;
const ENCODEDTOKEN = encode(TOKEN);

class LanguageService{

    async getAllLanguages() {
        return await axios.get(BASE_REST_API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    createLanguage(language) {
        return axios.post(BASE_REST_API_URL, {
            language,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    getLanguageById(languageId) {
        return axios.get(BASE_REST_API_URL + '/' + languageId, {
                headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    updateLanguage(languageId, language) {
        return axios.put(BASE_REST_API_URL + '/' + languageId, {
            language,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    deleteLanguage(languageId) {
        return axios.delete(BASE_REST_API_URL + '/' + languageId, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }
}

export default new LanguageService();