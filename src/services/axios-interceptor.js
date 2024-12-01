import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://hamiddawod-001-site4.ptempurl.com/api/', // Replace with your base URL
  timeout: 30000, // Timeout after 5 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  config => {
    // Add authorization token if available
    // const token = localStorage.getItem('token'); // Replace with your token logic
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    // Handle request errors
    console.error('Request Error:', error);
    return Promise.reject(error);
  },
);

// Response Interceptor
api.interceptors.response.use(
  response => {
    // Handle successful responses
    return response;
  },
  error => {
    // Handle errors globally
    if (error.response) {
      // Server returned a response with status code outside 2xx
      console.error('Error Response:', error.response.data);
      if (error.response.status === 401) {
        alert('Unauthorized! Please log in again.');
        // Optionally redirect to login page
        // window.location.href = '/login';
      } else if (error.response.status === 403) {
        alert('Forbidden! You do not have permission.');
      } else if (error.response.status === 404) {
        alert('Resource not found!');
      } else if (error.response.status >= 500) {
        alert('Server error! Please try again later.');
      }
    } else if (error.request) {
      // No response was received
      console.error('No Response:', error.request);
      alert('Network error! Please check your connection.');
    } else {
      // Error setting up the request
      console.error('Error Setting Up Request:', error.message);
      alert('Something went wrong! Please try again.');
    }

    return Promise.reject(error);
  },
);

export default api;
