import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/normalize.css'
import Paginas from './Paginas/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Paginas />
  </React.StrictMode>
);

