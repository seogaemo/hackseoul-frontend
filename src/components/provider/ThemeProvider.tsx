import React from "react";
import { ThemeProvider as CustomThemeProvider } from "styled-components";
import { light } from "../../themes/light";

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider(props: Props) {
  return (
    <CustomThemeProvider theme={{ colors: light }}>
      {props.children}
    </CustomThemeProvider>
  );
}
