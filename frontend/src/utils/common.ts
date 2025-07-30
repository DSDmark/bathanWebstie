import { ENGINEER_ROUTE, MANAGER_ROUTE, ROLES, USER_ROUTE } from '@/constants'
import { OnClick } from '@/types'
import Cookies from 'js-cookie'

export const handleOpenUtil = (e: OnClick, setState: any) => {
  const name = e.currentTarget.getAttribute('data-toggle-name')
  setState((p: any) => {
    return {
      ...p,
      toggles: {
        ...p.toggles,
        [e?.target?.name || name]: true,
      },
    }
  })
}

export const handleCloseUtil = (setState: any) => {
  setState((prevState: any) => {
    const updatedToggles = Object.fromEntries(Object.entries(prevState.toggles).map(([key]) => [key, false]))
    return {
      ...prevState,
      toggles: updatedToggles,
    }
  })
}

export function formatTwoValuesUtil(val1?: string, val2?: any, symbol: string = ','): string {
  return val1 ? `${val1}${symbol} ${val2}` : val2 || ''
}

export const CookiesUtil = {
  COOKIE_OPTIONS: {
    path: '/',
    secure: true as const,
    sameSite: 'None' as const,
    expires: 7,
  },
  get: (name: string) => {
    return JSON.parse(Cookies.get(name) || '{}')
  },
  set: (name: string, val: object) => {
    Cookies.set(name, JSON.stringify(val), CookiesUtil.COOKIE_OPTIONS)
  },
  remove: (name: string) => {
    Cookies.remove(name, CookiesUtil.COOKIE_OPTIONS)
  },
}

export const roleBasePageAccessUtil = (role: keyof typeof ROLES) => {
  const pagePermission: Record<keyof typeof ROLES, string[]> = {
    [ROLES.engineer]: Object.values({ ...ENGINEER_ROUTE, ...USER_ROUTE }),
    [ROLES.manager]: Object.values({ ...MANAGER_ROUTE, ...USER_ROUTE }),
  }
  return pagePermission[role].filter(Boolean)
}
