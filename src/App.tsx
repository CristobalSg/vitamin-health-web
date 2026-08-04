import type { ReactNode } from "react";

import { getServiceByPath } from "@/data/services";
import Home from "@/pages/Home";
import Proposals from "@/pages/Proposals";
import ServiceDetail from "@/pages/ServiceDetail";

type AppRoute = {
  path: string;
  element: ReactNode;
};

const routes: AppRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/proposals",
    element: <Proposals />,
  },
];

export default function App() {
  const pathname = window.location.pathname;
  const activeService = getServiceByPath(pathname);
  const activeRoute = routes.find((route) => route.path === pathname) ?? routes[0];

  if (activeService) {
    return <ServiceDetail service={activeService} />;
  }

  return activeRoute.element;
}
