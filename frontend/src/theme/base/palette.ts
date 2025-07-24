import { createTheme } from '@mui/material/styles'
import { error, primary, secondary, info, success } from './color'
import { PaletteMode } from '@mui/material'

export default function createPalette(preferredTheme: PaletteMode, isLoggedIn: boolean) {
  return createTheme({
    palette: {
      mode: preferredTheme,
      error,
      info,
      primary,
      secondary,
      success,
    },
  })
}
