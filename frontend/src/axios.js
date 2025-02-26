// src/axios.js
import axios from 'axios';

// Adjust the base URL according to your Docker setup or local development
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Ensure this matches your FastAPI container's URL
});

export default axiosInstance;
