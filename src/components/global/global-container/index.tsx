import { ComponentProps } from './constants';
import { Container } from './container';

export const GlobalContainer = ({ children }: ComponentProps) => {
  return <Container>{children}</Container>;
};
