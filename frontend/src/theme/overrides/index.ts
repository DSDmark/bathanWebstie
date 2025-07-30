// overrides
import AppBar from './appbar'
import Button from './button'
import Container from './container'
import CssBaseLine from './cssbaseline'
import Divider from './divider'
import Icon from './icon'
import Link from './link'
import Popover from './popover'
import SvgIcon from './svgIcon'
import TextField from './textfield'
import Tooltip from './tooltip'
import Typography from './typography'

// others
import { THEME_MODES } from '@/constants'
import { Theme } from '@mui/material'

export default function ComponentOverrides(theme: Theme) {
  const mode = theme.palette?.mode === THEME_MODES.light
  const overridesProps = { theme, mode }

  return Object.assign(
    AppBar(overridesProps),
    Link(overridesProps),
    Container(overridesProps),
    Popover(overridesProps),
    SvgIcon(overridesProps),
    CssBaseLine(overridesProps),
    Typography(overridesProps),
    Button(overridesProps),
    Tooltip(overridesProps),
    Icon(overridesProps),
    Divider(overridesProps),
    TextField(overridesProps),
  )
}
