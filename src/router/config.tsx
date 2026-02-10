import type { RouteObject } from "react-router-dom";
import { lazy } from "react";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import PrintMethod from "../pages/print-method/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/print-method",
    element: <PrintMethod />,
  },
  {
    path: "/contact",
    element: lazy(() => import("../pages/contact/page")),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
