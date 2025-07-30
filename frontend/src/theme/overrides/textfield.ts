import { Components } from '@mui/material'
import { IOverridesProps } from '../type'

export default function TextField(_: IOverridesProps): Components {
  return {
    MuiInputBase: {
      styleOverrides: {
        input: {
          textTransform: 'capitalize',
        },
      },
    },
  }
}
