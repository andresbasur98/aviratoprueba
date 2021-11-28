import axios from 'axios';

const baseURL = 'https://examen.avirato.com';

const aviratoApi = axios.create({baseURL});

aviratoApi.interceptors.request.use(
    async(config) => {
        const token = await localStorage.getItem('token');

        if(token){
            config.headers['Authorization'] = `Bearer token`;
        }
        return config;
    }

)


export default aviratoApi;