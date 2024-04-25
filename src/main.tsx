import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Supports weights 100-900
import '@fontsource-variable/dm-sans';
// bootstrap icons import
import "bootstrap-icons/font/bootstrap-icons.css"

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
