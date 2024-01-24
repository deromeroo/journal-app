import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const vintageTheme = createTheme({
  palette: {
    primary: {
      main: '#607274'
    },
    secondary: {
      main: '#B2A59B'
    },
    view: {
      main: '#DED0B6',
      secondary: '#DED0B650'
    },
    error: {
      main: red.A400
    }
  }
})
