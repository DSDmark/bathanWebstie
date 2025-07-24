import { alpha } from '@mui/material'
import { IColor } from '../type'

const withAlphas = (color: IColor) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha3: alpha(color.main, 0.3),
  }
}

// const getColor = (isLoggedIn: boolean): ColorPalette => {
//   if (isLoggedIn) {
//     switch (role) {
//       case 'admin':
//         return admin
//       case 'user':
//         return user
//       default:
//         return guest
//     }
//   } else {
//     return {}
//   }
// }

export const neutral = {
  50: '#F8F9FA',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D2D6DB',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#1C2536',
  900: '#111927',
}

export const primary = withAlphas({
  light: '#f8a63a',
  main: '#F79009',
  dark: '#ac6406',
  contrastText: '#FFFFFF',
})

export const secondary = withAlphas({
  light: '#526aa8',
  main: '#274593',
  dark: '#1b3066',
  contrastText: '#FFFFFF',
})

export const success = withAlphas({
  light: '#3fc79a',
  main: '#10B981',
  dark: '#0b815a',
  contrastText: '#FFFFFF',
})

export const info = withAlphas({
  light: '#37bedc',
  main: '#06AED4',
  dark: '#047994',
  contrastText: '#FFFFFF',
})

export const error = withAlphas({
  light: '#f3695f',
  main: '#F04438',
  dark: '#a82f27',
  contrastText: '#FFFFFF',
})
