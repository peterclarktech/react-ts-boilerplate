import { FC } from "react";
import { useRoutes } from "react-router-dom";

import App from "./App";
import AuthorPage from "./pages/AuthorPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import CrudLayoutPage from "./pages/crudpages/CrudLayoutPage";
import UserListPage from "./pages/crudpages/UserListPage";

const BaseRoute: FC<{}> = () => {
  const element = useRoutes([
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
              element: <UserListPage />
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
  return (
    <div className="bg-white text-black dark:bg-gray-dark dark:text-white">
      {element}
    </div>
  )
}

export default BaseRoute;