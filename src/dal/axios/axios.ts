import axios from 'axios';
import firebaseConfig from '../../assets/firebaseconfig.json';

const { apiKey } = firebaseConfig;


export const instanse = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1/",
    params: {key: apiKey}
});

