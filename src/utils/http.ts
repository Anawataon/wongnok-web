import axios, { AxiosError, AxiosResponse } from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        Accept: 'application/json',
    },
});

http.interceptors.request.use((config) => {
    const token = '';
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

http.interceptors.response.use(
    (res: AxiosResponse) => {
        return Promise.resolve(res);
    },
    (error: AxiosError) => {
        if (error) {
            switch (error.response?.status) {
                case 400: {
                    window.location.href = '/errors/400';
                    break;
                }
                case 401: {
                    window.location.href = '/errors/401';
                    break;
                }
                case 403: {
                    window.location.href = '/errors/403';
                    break;
                }
                case 404: {
                    window.location.href = '/errors/404';
                    break;
                }
                default: {
                    return Promise.reject(error.response?.data || error);
                }
            }
        }
    }
);

export default http;
