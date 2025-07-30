import { Components } from '@mui/material'
import { IOverridesProps } from '../type'

export default function CssBaseLine({ theme }: IOverridesProps): Components {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          textTransform: 'capitalize',
          color: theme.palette.primary.dark,
          textDecoration: 'none',
        },
        '#nprogress': {
          pointerEvents: 'none',
        },
        '#nprogress .bar': {
          backgroundColor: theme.palette.primary.main,
          height: '4px',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 2000,
        },
        '#nprogress .peg': {
          boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`,
        },
      },
    },
  }
}
