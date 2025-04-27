import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';

const api = axios.create({
  baseURL: "https://ncr-webstie-b-copy.onrender.com", // ✅ use import.meta.env here
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;
