import type { ReactNode } from "react";

import Home from "@/pages/Home";

type AppRoute = {
  path: string;
  element: ReactNode;
};

const routes: AppRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export default function App() {
  const activeRoute = routes.find((route) => route.path === window.location.pathname) ?? routes[0];

  return activeRoute.element;
}
