import axios from 'axios'

const LANGUAGES_BASE_REST_API_URL = 'http://localhost:8080/api/v1/languages';

class LanguageService{

    getAllLanguages(){
        return axios.get('http://localhost:8080/api/v1/languages')
    }

    createLanguage(language){
        return axios.post(LANGUAGES_BASE_REST_API_URL, language)
    }

    getLanguageById(languageId){
        return axios.get(LANGUAGES_BASE_REST_API_URL + '/' + languageId);
    }

    updateLanguage(languageId, language) {
        return axios.put(LANGUAGES_BASE_REST_API_URL + '/' + languageId, language);
    }

    deleteLanguage(languageId){
        return axios.delete(LANGUAGES_BASE_REST_API_URL + '/' + languageId);
    }
}

export default new LanguageService();