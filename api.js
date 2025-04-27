import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';

const api = axios.create({
  baseURL: "http://localhost:8181", // ✅ use import.meta.env here
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;
