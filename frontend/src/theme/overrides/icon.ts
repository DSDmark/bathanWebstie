import { IOverridesProps } from '../type'
import { Components } from '@mui/material'
export default function Icon(overrides: IOverridesProps): Components {
  const { theme } = overrides
  return {
    MuiIcon: {
      styleOverrides: {
        root: {
          fontSize: 'large',
          color: theme.palette.primary.light,
        },
      },
    },
  }
}
