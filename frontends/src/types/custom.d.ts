import { ReactNode } from "react"

export type ToolsRoles = "Master" | "Distributor" | "Coach" | "Referent"

// interfaces definition
export interface IChildrenProps {
  children: ReactNode
}
export interface ISelectWithSearch {
  id: number
  value: string
  label: string
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
