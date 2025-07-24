import { Toaster } from "@/components";
import { RoutesValidator } from "@/hocs";
import store from "@/states";
import ThemeProvider from "@/theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
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
