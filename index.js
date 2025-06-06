import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import  {UserProvider}  from './contexts/context.user';
import {ProductProvider} from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter> 
  <UserProvider>
    <ProductProvider>
      <CartProvider>
      <App />

      </CartProvider>
     
    </ProductProvider>
   </UserProvider>
  </BrowserRouter>    
   
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
