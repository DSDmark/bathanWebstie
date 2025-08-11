import { Components } from '@mui/material'
import { IOverridesProps } from '../type'

export default function Typography(overrides: IOverridesProps): Components {
  const { theme } = overrides
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
        body1: {
          color: theme.palette.text.primary,
        },
        body2: {
          color: theme.palette.text.secondary,
        },
      },
    },
  }
}
