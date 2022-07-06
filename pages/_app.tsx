import { AppShell, MantineProvider } from "@mantine/core";
import { Header } from "@sextival/components/Header";
import type { AppProps } from "next/app";

import "../src/styles/embla.css";

import { mantine } from "../src/theme/mantine";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mantine}>
      <AppShell
        sx={{
          main: {
            padding: 0,
          },
        }}
      >
        <Header />
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  );
}

export default MyApp;
