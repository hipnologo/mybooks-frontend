import axios from 'axios'
import {decode, encode} from 'base-64'

const LANGUAGES_BASE_REST_API_URL = 'http://localhost:8080/api/v1/languages';
const USER = 'admin'
const PASSWORD = 'senha123'
const PASSBASE64 = '$2a$10$8/FbKTtcU5Dg0n0gtd2Sy.q1AsNJFm6x/cEBpGmmODh2FSbKttvw2'
const TOKEN = `${USER}:${PASSWORD}`;
const ENCODEDTOKEN = encode(TOKEN);

class LanguageService{

    async getAllLanguages(){
        return await axios.get(LANGUAGES_BASE_REST_API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + ENCODEDTOKEN
            }
        }).then(res => {
                console.log(res);
                //console.log(JSON.stringify(res.data));
                //console.log(res.headers['Authorization']);
            })
            .catch(err =>{
                console.log(err);
            })
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