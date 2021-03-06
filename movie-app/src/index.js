import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';

import App from './components/App';
import movies from './reducers/index'

const store = createStore(movies);

// console.log(store, store.getState());

// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [{name : 'superman'}]
// })

// console.log(store, store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
