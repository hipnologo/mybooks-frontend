import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_REST_API_URL //'http://localhost:8080/api/v1'
});