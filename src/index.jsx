import ReactDOM from 'react-dom';
import React from 'react';

import './layout/index.css';

import App from './App';

ReactDOM.render(
  //o que irá renderizar (transformado em JS)

  <div>
    <App />
  </div>,

  //onde irá renderizar
  document.getElementById('root')
)
