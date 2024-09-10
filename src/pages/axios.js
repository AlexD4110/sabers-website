import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Adjust this to match your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can set up interceptors here if needed
api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
