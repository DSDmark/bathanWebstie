import { IOverridesProps } from '../type'
import { Components } from '@mui/material'

export default function Divider(overrides: IOverridesProps): Components {
  const { theme } = overrides
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          color: theme.palette.divider,
          borderStyle: 'dashed',
        },
      },
    },
  }
}
