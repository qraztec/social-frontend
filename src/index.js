import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import axios from "axios"

if(process.env.NODE_ENV !== "development") {
  axios.defaults.baseURL = 'http://34.209.241.12:8800/api';
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
