import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ExploreLayout from "./layouts/ExploreLayout";
import Help from "./pages/Help";
import ErrorPage from "./pages/ErrorPage";
import Cities from "./pages/Cities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Home /> },
      {
        path: "explore",
        element: <ExploreLayout />,
        children: [{ path: "cities", element: <Cities /> }],
      },
      { path: "help", element: <Help /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
