import axios from 'axios';

const origin = window.location.origin;
const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: origin === 'http://localhost:3000' ? 'http://localhost:3002' : 'https://barbershop.com.br/api',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export default api;