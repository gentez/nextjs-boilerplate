import { GlobalContainer } from '@/components/global/global-container';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from '../store/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <GlobalContainer>
      <Toaster />
      <SessionProvider session={pageProps.session}  >
      <Component {...pageProps} />
      </SessionProvider>
    </GlobalContainer>
    </Provider>
  );
}
