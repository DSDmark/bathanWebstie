import { IOverridesProps } from '../type'
import { Components } from '@mui/material'

export default function Link(_: IOverridesProps): Components {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit',
          textDecoration: 'none',
          underline: 'none',
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
  }
}
