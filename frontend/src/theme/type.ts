import { IChildrenProps } from '@/types'
import { Theme } from '@mui/material'

export interface IThemeProvider extends IChildrenProps {}

export interface IColor {
  light: string
  main: string
  dark: string
  contrastText: string
}

export interface IOverridesProps {
  theme: Theme
  mode: boolean
}
