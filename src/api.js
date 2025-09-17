// src/api.js
import axios from "axios";

const api = axios.create({
  // for development use:
  // baseURL:  "http://localhost:8181", 
  // For production use:
  baseURL: "https://api.ncrcollegetdledu.org.in",
  withCredentials: true, // if you are using cookies/JWT
});

export default api;
