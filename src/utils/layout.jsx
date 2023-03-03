import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material/"
import theme from "./theme.js"
import "@fontsource/ntr"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Layout;
