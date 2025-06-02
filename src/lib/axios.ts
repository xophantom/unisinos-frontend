import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.0.126:4001',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api; 