import { useMemo } from "react";

// @mui
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeOptions,
} from "@mui/material";

// base overrides
import { useAppSelector } from "@/hooks/";
import { breakpoints, createPalette, customShadow, shadows } from "./base";
import ComponentOverrides from "./overrides";
import { IThemeProvider } from "./type";

const ThemeProvider = ({ children }: IThemeProvider) => {
  const { mode } = useAppSelector(({ ui }) => ui);
  const { isLogin } = useAppSelector(({ user }) => user);
  const refTheme = createPalette(mode, isLogin);
  const { palette } = refTheme;
  const customShadows = useMemo(() => customShadow(refTheme), [refTheme]);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints,
      palette,
      customShadows,
      shadows,
      // typography,
    }),
    [palette, customShadows]
  );

  const theme = responsiveFontSizes(createTheme(themeOptions));
  theme.components = ComponentOverrides(theme);
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
