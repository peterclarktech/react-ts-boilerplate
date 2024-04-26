import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Supports weights 100-900
import '@fontsource-variable/dm-sans';
// bootstrap icons import
import "bootstrap-icons/font/bootstrap-icons.css"

import { BrowserRouter } from 'react-router-dom';

import BaseRoute from './BaseRoute';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <BaseRoute />
      </BrowserRouter>
  </React.StrictMode>,
)
