import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import { Toaster } from "@/components";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { RoutesValidator } from "@/hocs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import store from "@/states";
import { Provider } from "react-redux";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <RoutesValidator>
            <Component {...pageProps} />
          </RoutesValidator>
        </LocalizationProvider>
        <Toaster />
      </ThemeProvider>
    </Provider>
  );
}
