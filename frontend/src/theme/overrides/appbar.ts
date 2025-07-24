import { IOverridesProps } from '../type'
import { Components } from '@mui/material'

export default function AppBar(overrides: IOverridesProps): Components {
  const { theme } = overrides
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // background: alpha(theme.palette.primary.main, 0.6),
          boxShadow: 'none',
          zIndex: theme.zIndex.appBar + 1,
          color: theme.palette.background.default,
          transition: theme.transitions.create(['height'], {
            duration: theme.transitions.duration.shorter,
          }),
        },
      },
    },
  }
}
