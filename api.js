import axios from 'axios';

// Create a navigation cache to avoid circular imports
let navigateFn = null;
export const setNavigate = (navigate) => {
  navigateFn = navigate;
};

// Track the current path
let currentPath = window.location.pathname;

// Update the current path
export const updateCurrentPath = (path) => {
  currentPath = path;
};

// Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8181', // Replace with your actual API URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Send cookies with every request
});

// Interceptor
api.interceptors.response.use(
  async (response) => {
    const url = response.config.url;
    
    // Skip auth-check for certain routes (e.g., /user/protected, /user/logout)
    const skipUrls = ['/user/protected', '/user/logout', '/login','/'];
    
    // Also skip auth check if current path is root '/'
    if (!skipUrls.some((skipUrl) => url.includes(skipUrl)) && currentPath !== '/' && currentPath !== '/login') {
      try {
        await api.get('/user/protected', { withCredentials: true });
      } catch (err) {
        if (err.response?.status === 401 && navigateFn) {
          navigateFn('/login');
        }
        return Promise.reject(err);
      }
    }
    
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;