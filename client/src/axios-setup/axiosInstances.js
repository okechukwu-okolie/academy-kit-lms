import axios from 'axios'


// api.js (It's common to put this configuration in a separate file)

const API_BASE_URL = 'https://localhost:6000'; // Replace with your actual API's base URL

const api = axios.create({
  // 1. Base URL: All requests made with 'api' will start with this URL.
  //    E.g., api.get('/users') becomes GET https://api.example.com/v1/users
  baseURL: API_BASE_URL,

  // 2. Default Headers: Common settings sent with every request.
  headers: {
    'Content-Type': 'application/json', // Tells the server we are sending/expecting JSON data
    'Authorization': `Bearer ${localStorage.getItem('token')}` // Example: For authentication
  },

  // 3. Timeout: The request will be aborted if it takes longer than this many milliseconds.
  timeout: 10000, // 10 seconds
});

export default api;

/*
Beginner Explanation: Think of the api instance as a custom-made remote control. Instead of buying a new remote for every channel (request), you program this one remote with the TV's power settings (Base URL) and language (Headers) once. Now, every time you press a channel button (e.g., get), it already knows the basic settings.
*/