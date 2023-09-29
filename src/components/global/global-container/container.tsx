import Head from 'next/head';
import { ComponentProps } from './constants';

export const Container = ({ children }: ComponentProps) => {
  return (
    <div className='overflow-x-hidden'>

        {children}
       
      
    </div>
  );
};

export default Container;