import { AUTH_ROUTE, PROTECTED_ROUTE } from '@/constants'
import { useAppSelector, useInit } from '@/hooks'
import { DefaultLayout, MainLayout, RedirectLayout } from '@/layouts'
import { useRouter } from 'next/router'
import { Component } from 'react'

const layoutMap = {
  main: MainLayout,
  redirect: RedirectLayout,
  default: DefaultLayout,
}

const normalizePath = (path: string): string => {
  const pathWithoutDynamicSegments = path.replace(/\[.*?\]/g, '')
  return pathWithoutDynamicSegments
}

const getRouteLayout = (path: string, userId?: string) => {
  const basePath = path.split('/[')[0]

  const protectedRoutes = Object.values(PROTECTED_ROUTE).map(normalizePath)
  if (protectedRoutes.includes(basePath) && userId) {
    return layoutMap.main
  }

  const defaultRoutes = Object.values(AUTH_ROUTE).map(normalizePath)
  if (defaultRoutes.includes(basePath) && !userId) {
    return layoutMap.default
  }

  return layoutMap.redirect
}

export default function ProtectedRouter({ children }: any) {
  const { details } = useAppSelector(({ user }) => user)
  const router = useRouter()
  useInit()

  if (details?.id) {
    const Layout = getRouteLayout(router.pathname, details?.id)
    const getLayout = (Component as any).getLayout || ((page: string) => page)
    return <Layout>{getLayout(children)}</Layout>
  }

  const Layout = getRouteLayout(router.pathname)
  const getLayout = (Component as any).getLayout || ((page: string) => page)
  return <Layout>{getLayout(children)}</Layout>
}
