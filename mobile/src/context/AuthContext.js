import { createContext } from 'react';
import createDataContext from './createDataContext';

const authReducer = (state, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
