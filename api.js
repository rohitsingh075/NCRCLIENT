import axios from 'axios';

const api = axios.create({
  baseURL: "https://ncr-webstie-b-copy.onrender.com", // ✅ use import.meta.env here
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;
