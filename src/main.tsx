import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Supports weights 100-900
import '@fontsource-variable/dm-sans';
// bootstrap icons import
import "bootstrap-icons/font/bootstrap-icons.css"

import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';

import App from './App';
import AuthorPage from './pages/AuthorPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import CrudLayoutPage from './pages/crudpages/CrudLayoutPage';
import UserListPage from './pages/crudpages/UserListPage';
import loadSampleData from './services/LoadSampleData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/crudsample",
        element: <CrudLayoutPage />,
        children: [
          {
            index: true,
            element: <UserListPage />,
            loader: async ({ params }) => {
              console.log(params);
              return defer({ data: loadSampleData() });
            },
          },
          {
            path: "*",
            element: <ErrorPage message="Page not found" />
          }
        ]
      },
      {
        path: "author",
        element: <AuthorPage />
      },
      {
        path: "*",
        element: <ErrorPage message="Page not found" />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
