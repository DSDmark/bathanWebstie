import { IOverridesProps } from '../type'
import { Components } from '@mui/material'

export default function Popover(_: IOverridesProps): Components {
  return {
    MuiPopover: {
      styleOverrides: {},
      defaultProps: {
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
      },
    },
  }
}
