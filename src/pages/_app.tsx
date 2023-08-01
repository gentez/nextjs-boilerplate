import { GlobalContainer } from '@/components/global/global-container';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {SessionProvider}from 'next-auth/react'
import toast, { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }: AppProps) {
  return (
   
    <GlobalContainer>
      <Toaster />
      <Component {...pageProps} />
    </GlobalContainer>

  );
}
