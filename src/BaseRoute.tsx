import { FC } from "react";
import { useRoutes } from "react-router-dom";

import App from "./App";
import AuthorPage from "./pages/AuthorPage";
import CrudSamplePage from "./pages/CrudSamplePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const BaseRoute:FC<{}> = () => {
    const element = useRoutes([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <HomePage />
          },
          {
            path: "/crudsample",
            element: <CrudSamplePage />
          },
          {
            path: "/author",
            element: <AuthorPage />
          },
          {
            path: "/*",
            element: <ErrorPage message="Page not found"/>
          }
        ]
      }
    ]);
    return (
      <div className="bg-white text-black dark:bg-gray-dark dark:text-white">
        {element}
      </div>
    )
  }

export default BaseRoute;