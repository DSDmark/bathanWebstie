import { PROTECTED_ROUTE, AUTH_ROUTE } from "@/constants";
import { DefaultLayout, MainLayout, RedirectLayout } from "@/layouts";
import { useRouter } from "next/router";
import React, { Component } from "react";

const layoutMap = {
  main: MainLayout,
  redirect: RedirectLayout,
  default: DefaultLayout,
};

const normalizePath = (path: string): string => {
  const pathWithoutDynamicSegments = path.replace(/\[.*?\]/g, "");
  return pathWithoutDynamicSegments;
};

const getRouteLayout = (path: string) => {
  const basePath = path.split("/[")[0];

  const protectedRoutes = Object.values(PROTECTED_ROUTE).map(normalizePath);
  if (protectedRoutes.includes(basePath)) {
    return layoutMap.main;
  }

  const defaultRoutes = Object.values(AUTH_ROUTE).map(normalizePath);
  if (defaultRoutes.includes(basePath)) {
    return layoutMap.default;
  }

  return layoutMap.redirect;
};

export default function ProtectedRouter({ children }: any) {
  const router = useRouter();

  const Layout = getRouteLayout(router.pathname);
  const getLayout = (Component as any).getLayout || ((page: string) => page);
  return <Layout>{getLayout(children)}</Layout>;
}
