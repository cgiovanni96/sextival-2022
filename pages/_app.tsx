import { AppShell, Box, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

import { mantine } from "@sextival/theme/mantine";
import { Header } from "@sextival/components/Header";

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
        <Box>
          <Component {...pageProps} />
        </Box>
      </AppShell>
    </MantineProvider>
  );
}

export default MyApp;
