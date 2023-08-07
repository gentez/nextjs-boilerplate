import { SessionProvider, useSession } from 'next-auth/react';
import { ComponentProps } from './constants';
import { Container } from './container';
import Context from './context';

export const GlobalContainer = ({ children }: ComponentProps) => {
  return (
      <Container>{children}</Container>
  );
};
