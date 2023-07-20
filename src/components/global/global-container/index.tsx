import { ComponentProps } from './constants';
import { Container } from './container';
import Context from './context';

export const GlobalContainer = ({ children }: ComponentProps) => {
  return (
    <Context.Provider value={{}}>
      <Container>{children}</Container>
    </Context.Provider>
  );
};
