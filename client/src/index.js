import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvide} from './context/auth';
import { SearchProvide } from './context/search';
import { CartProvide } from './context/cart';
import { LikedProvide  } from './context/likes';
import "antd/dist/reset.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <AuthProvide>
      <SearchProvide>
        <CartProvide>
          <LikedProvide>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          </LikedProvide>
        </CartProvide>
      </SearchProvide>
    </AuthProvide>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
