import axios from 'axios'
import {decode, encode} from 'base-64'

const LANGUAGES_BASE_REST_API_URL = 'http://localhost:8080/api/v1/languages';
const USER = 'admin'
const PASSWORD = 'senha123'
const TOKEN = `${USER}:${PASSWORD}`;
const ENCODEDTOKEN = encode(TOKEN);

class LanguageService{

    async getAllLanguages() {
        return await axios.get(LANGUAGES_BASE_REST_API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    createLanguage(language) {
        return axios.post(LANGUAGES_BASE_REST_API_URL, {
            language,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    getLanguageById(languageId) {
        return axios.get(LANGUAGES_BASE_REST_API_URL + '/' + languageId, {
                headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    updateLanguage(languageId, language) {
        return axios.put(LANGUAGES_BASE_REST_API_URL + '/' + languageId, {
            language,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }

    deleteLanguage(languageId) {
        return axios.delete(LANGUAGES_BASE_REST_API_URL + '/' + languageId, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        })
    }
}

export default new LanguageService();