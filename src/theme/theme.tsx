import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface iTheme {
  colors: {
    black: string;
    white: string;
  };
}

export const theme: iTheme = {
  colors: {
    black: "black",
    white: "white",
  },
};

interface iThemeWrapper {
  children: ReactNode;
}

export const ThemeWrapper = ({ children }: iThemeWrapper) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
