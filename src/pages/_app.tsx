import type { AppProps } from 'next/app';
import Head from 'next/head'
import GlobalStyle from '../../styles/global-style';
import Header from 'components/Header';
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
  <Head>
    <title>
      Teste next
    </title>
    <meta name="description" content="Teste next" />
  </Head>
  <Header/>
  <GlobalStyle/>
    <Component {...pageProps} />
    </>
    )
}
export default MyApp;
