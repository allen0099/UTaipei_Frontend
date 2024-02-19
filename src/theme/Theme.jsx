"use client";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BaseFont } from "@/theme/Fonts";

const commonOptions = {
  palette: {
    primary: {
      main: "#0571b9",
    },
    secondary: {
      main: "#9776e6",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: BaseFont(),
  },
};

export default function Theme(props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(() => {
    if (!prefersDarkMode) {
      return createTheme({
        ...commonOptions,
        palette: {
          ...commonOptions.palette,
          mode: "light",
          background: {
            default: "#f9f9fb",
            paper: "#f9f9fb",
          },
        },
      });
    } else {
      return createTheme({
        ...commonOptions,
        palette: {
          mode: "dark",
        },
      });
    }
  }, [prefersDarkMode]);

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
