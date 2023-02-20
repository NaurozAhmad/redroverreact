import { createContext } from 'react';

export const AuthContext = createContext({
  userData: false as any,
  setUserData: (auth: any) => {},
});
