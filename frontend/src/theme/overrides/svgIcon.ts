import { IOverridesProps } from '../type'
import { Components } from '@mui/material'

export default function SvgIcon(overrides: IOverridesProps): Components {
  const { theme } = overrides
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.contrastText,
        },
      },
    },
  }
}
