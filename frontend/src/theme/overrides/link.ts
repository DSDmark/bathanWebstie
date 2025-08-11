import { Components } from '@mui/material'
import { IOverridesProps } from '../type'

export default function Link({ theme }: IOverridesProps): Components {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          underline: 'none',
          color: theme.palette.primary.light,
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
  }
}
