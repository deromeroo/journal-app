/* eslint-disable react/prop-types */
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { vintageTheme } from './'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ vintageTheme }>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
