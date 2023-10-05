import { GlobalContainer } from '@/components/global/global-container';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from '../store/index';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <GlobalContainer>
      <Toaster />
      <SessionProvider session={pageProps.session}  >
      <Head>
                    <title>Home – Jaalnet llc.</title>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
      <Component {...pageProps} />
      </SessionProvider>
    </GlobalContainer>
    </Provider>
  );
}
