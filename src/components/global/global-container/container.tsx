import { ComponentProps } from './constants';

export const Container = ({ children }: ComponentProps) => {
  return (
    <div id="container">
      <div className="header">
        <p>header component should be call over here..</p>
      </div>
      {children}
      <div className="footer">
        <p>footer component should be call over here..</p>
      </div>
    </div>
  );
};

export default Container;
