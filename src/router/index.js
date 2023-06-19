import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HomePage, ErrorPage, DocumentationPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/documentation",
    element: <DocumentationPage />
  }
], {
  basename: '/'
});

const Routes = () => <RouterProvider router={router} />

export default Routes;
