import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8181", // ✅ use import.meta.env here
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;
