import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fbconfig from './fbconfig';
import { initializeApp } from 'firebase/app';

const app = initializeApp(fbconfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <App />
    <ToastContainer 
    position='top-center'
    autoClose={2000}
    theme='colored'
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    rtl={true}
    pauseOnFocusLoss
    draggable
    pauseOnHovertheme='colored'
    bodyClassName='toastbody'

    />
 </ShopContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
