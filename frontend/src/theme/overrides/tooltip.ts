import { IOverridesProps } from '../type'
import { Components } from '@mui/material'

export default function Tooltip(overrides: IOverridesProps): Components {
  const { theme, mode } = overrides
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: theme.palette.grey[mode ? 200 : 800],
          color: theme.palette.grey[mode ? 800 : 200],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
  }
}
