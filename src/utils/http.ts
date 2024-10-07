import axios from "axios";

const http = axios.create({
    baseURL:"",
    timeout: 7200000,
    headers: {"content-type":"application/json"}
});

http.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    response => {
        return Promise.resolve(response.data);
    },
    error => {
        return Promise.reject(error);
    }
);

export default http;