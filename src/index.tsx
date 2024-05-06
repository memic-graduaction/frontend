import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
