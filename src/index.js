import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import App from './App';
import './index.css';
// import cartReducer from "./components/reducers/cartReducer"

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "http://localhost:3000/api/v1";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
