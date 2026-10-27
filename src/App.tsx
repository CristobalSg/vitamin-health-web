import type { ReactNode } from "react";

import Seo from "@/components/Seo";
import { getServiceByPath } from "@/data/services";
import BaseLayout from "@/layout/BaseLayout";
import Home from "@/pages/Home";
import InfoPage from "@/pages/InfoPage";
import NotFound from "@/pages/NotFound";
import Proposals from "@/pages/Proposals";
import ServiceDetail from "@/pages/ServiceDetail";
import AuthoritySection from "@/sections/AuthoritySection";
import LocationSection from "@/sections/LocationSection";
import ServicesSection from "@/sections/ServicesSection";
import { getSeoEntry, normalizePath } from "@/utils/seo";

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
  {
    path: "/reservar-hora",
    element: (
      <BaseLayout>
        <InfoPage kind="booking" />
      </BaseLayout>
    ),
  },
  {
    path: "/servicios",
    element: (
      <BaseLayout>
        <ServicesSection standalone />
      </BaseLayout>
    ),
  },
  {
    path: "/equipo-medico",
    element: (
      <BaseLayout>
        <AuthoritySection standalone />
      </BaseLayout>
    ),
  },
  {
    path: "/ubicacion",
    element: (
      <BaseLayout>
        <LocationSection standalone />
      </BaseLayout>
    ),
  },
  {
    path: "/contacto",
    element: (
      <BaseLayout>
        <InfoPage kind="contact" />
      </BaseLayout>
    ),
  },
];

export default function App() {
  const pathname = normalizePath(window.location.pathname);
  const seoEntry = getSeoEntry(pathname);
  const activeService = getServiceByPath(pathname);
  const activeRoute = routes.find((route) => route.path === pathname);

  if (activeService) {
    return (
      <>
        <Seo entry={seoEntry} />
        <ServiceDetail service={activeService} />
      </>
    );
  }

  return (
    <>
      <Seo entry={seoEntry} />
      {activeRoute?.element ?? <NotFound />}
    </>
  );
}
