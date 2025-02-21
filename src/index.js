import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import {Category} from './components/category';
import {Products} from './components/product';
import {Stock} from './components/stock';
import {Suppliers} from './components/suppliers';
import './bootstrap.css'
import {Categorycntxtprovider} from './context/categorycontext';
import {Suppliercntxtprovider} from './context/suppliercontext';
import {ProdcontextProvider} from './context/productcontext';
import {Contextprovider} from './context/stockcontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Categorycntxtprovider>
      <Suppliercntxtprovider>
        <ProdcontextProvider>
          <Contextprovider>
            <BrowserRouter>
              <Routes>
                <Route path='/category' element={<Category />} />
                <Route path='/prod' element={<Products />} />
                <Route path='/stock' element={<Stock />} />
                <Route path='/suppliers' element={<Suppliers />} />
              </Routes>
            </BrowserRouter>
          </Contextprovider>
        </ProdcontextProvider>
      </Suppliercntxtprovider>
    </Categorycntxtprovider>
  </React.StrictMode>
);

{/* <App /> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
