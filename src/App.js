import './App.css';
import React from 'react';
import {BrowserRouter,Routes , Route} from 'react-router-dom';
import HomePage from './homepage';
import ShopPage from './shop/shop.component';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>

      </Routes>
      </BrowserRouter>

  );
}

export default App;
