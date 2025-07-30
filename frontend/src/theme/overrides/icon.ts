import { Components } from '@mui/material'
import { IOverridesProps } from '../type'
export default function Icon(overrides: IOverridesProps): Components {
  const { theme } = overrides
  return {
    MuiIcon: {
      styleOverrides: {
        root: {
          fontSize: 'large',
          color: theme.palette.primary.dark,
        },
      },
    },
  }
}
