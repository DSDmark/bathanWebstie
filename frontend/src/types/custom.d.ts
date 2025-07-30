import { ReactNode } from 'react'

export type ToolsRoles = 'Master' | 'Distributor' | 'Coach' | 'Referent'

// interfaces definition
export interface IChildrenProps {
  children: ReactNode
}

export type IOptionsFormat = {
  id: number | string
  name: string
}

export type t = (e: string) => string

export type Filters = {
  type?: string
  page?: number
  search?: string
  pagePerItm?: number
  to?: string
  from?: string
  limit?: number
}

export interface IFontStyles {
  fontFamily: string
  fontStyle?: string
  fontWeight?: string | number
}
