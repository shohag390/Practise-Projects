import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Components/Home/Home";
import User from "../Components/User";
import Loader from "../Components/Loader";
import AxiosMethod from "../Components/AxiosMethod";
import SuspenseMethod from "../Components/SuspenseMethod";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "suspense",
        Component: SuspenseMethod,
      },
      {
        path: "loader",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        Component: Loader,
      },
      {
        path: "axios",
        Component: AxiosMethod,
      },
    ],
  },
]);
