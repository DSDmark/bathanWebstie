import { alpha } from '@mui/material'
import { IOverridesProps } from '../type'
import { Components } from '@mui/material'

export default function Button(overrides: IOverridesProps): Components {
  const { mode, theme } = overrides

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          color: theme?.palette?.grey[100] || '',
          background: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightBold,
          '&:hover': {
            cursor: 'pointer',
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.shadows[0],
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        },
        containedPrimary: {
          boxShadow: theme.shadows[8],
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        },
        containedSecondary: {
          boxShadow: theme.shadows,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  }
}
