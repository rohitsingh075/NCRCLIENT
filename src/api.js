// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL:  "https://ncrcollegetdledu.org.in", 
  // For production use:
  // baseURL: "https://ncrcollegetdledu.org.in/api",
  withCredentials: true, // if you are using cookies/JWT
});

export default api;
