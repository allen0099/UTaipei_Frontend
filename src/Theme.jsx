"use client";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BaseFont } from "@/components/UIFonts";

export default function Theme(props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
        typography: {
          fontFamily: BaseFont(),
        },
      }),
    [prefersDarkMode],
  );

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
