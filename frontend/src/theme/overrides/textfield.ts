import { Components } from '@mui/material'
import { IOverridesProps } from '../type'

export default function TextField(_: IOverridesProps): Components {
  return {
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&[type="email"]': {
            textTransform: 'none !important',
          },
          '&[type="password"]': {
            textTransform: 'none !important',
          },
        },
      },
    },
  }
}
