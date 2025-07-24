import { Components } from '@mui/material'
import { IOverridesProps } from '../type'

export default function TextField(overrides: IOverridesProps): Components {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
  }
}
