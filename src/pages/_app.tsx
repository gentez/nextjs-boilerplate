import { GlobalContainer } from '@/components/global/global-container';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContainer>
      <Component {...pageProps} />
    </GlobalContainer>
  );
}
