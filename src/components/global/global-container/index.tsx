import { SessionProvider } from 'next-auth/react';
import { ComponentProps } from './constants';
import { Container } from './container';
import Context from './context';

export const GlobalContainer = ({ children }: ComponentProps) => {
  return (
    <SessionProvider>
      <Container>{children}</Container>
      </SessionProvider>
  
  );
};
