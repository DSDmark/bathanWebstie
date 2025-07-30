import { Components } from '@mui/material'
import { IOverridesProps } from '../type'

export default function SvgIcon(overrides: IOverridesProps): Components {
  const { theme } = overrides
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
        },
      },
    },
  }
}
