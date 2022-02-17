import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {store, persistor} from '../src/redux/store'
import './index.css';
import App from './App';
ReactDOM.render(
  <Provider store ={store}>

  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
  
 
  
  </Provider>,
  document.getElementById('root')
);

 
