import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from "react-redux";
import configStore from "./redux/store/configStore";
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

const store = configStore();

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
