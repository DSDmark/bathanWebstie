import { Components } from "@mui/material";
import { IOverridesProps } from "../type";

export default function CssBaseLine(_: IOverridesProps): Components {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          textTransform: "capitalize",
        },
      },
    },
  };
}
