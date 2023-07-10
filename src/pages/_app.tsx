import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import NavBarComponent from './componenets/NavBar/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBarComponent data={pageProps.data} />
      <Component {...pageProps} />
    </>
  );
}

