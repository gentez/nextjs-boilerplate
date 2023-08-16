import { GlobalContainer } from '@/components/global/global-container';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import toast, { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }: AppProps) {
  return (
   
    <GlobalContainer>
      <Toaster />
      <SessionProvider session={pageProps.session}  >
      <Component {...pageProps} />
      </SessionProvider>
    </GlobalContainer>

  );
}
