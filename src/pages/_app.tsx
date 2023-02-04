import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
//import { ProdutoProvider } from "../contexts/ProdutoContext";


import GlobalStyle from "../styles/globalstyle"
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
   // <ProdutoProvider Children={undefined}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
   // </ProdutoProvider>
  );
}