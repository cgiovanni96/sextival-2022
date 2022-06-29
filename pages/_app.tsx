import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "../src/theme";
import { Global } from "../src/theme/Global";

import "../src/styles/embla.css";

import { mantine } from "../src/theme/mantine";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mantine}>
      <ThemeProvider theme={theme}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </MantineProvider>
  );
}

export default MyApp;
