import { IOverridesProps } from '../type'
import { Components } from '@mui/material'

export default function Container(_: IOverridesProps): Components {
  // const { mode } = overrides
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: '4rem',
        },
      },
    },
  }
}
