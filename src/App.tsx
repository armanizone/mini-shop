import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Cart from './pages/Cart/Cart';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';

function App() {

  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
