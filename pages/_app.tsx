import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";
import { Global } from "../src/theme/Global";
import { Header } from "../src/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
