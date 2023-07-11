import { createContext } from 'react';
import { ComponentContext } from './constants';

export const Context = createContext<ComponentContext>({});

export default Context;
