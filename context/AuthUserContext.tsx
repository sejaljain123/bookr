import { createContext, useContext, Context, useState } from 'react';
import useFirebaseAuth from '../utils/useFirebaseAuth';
import firebase from 'firebase';

interface Auth {
  authUser: null;
  loading: boolean;
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
}

const authUserContext = createContext({
  authUser: null,
  loading: false,
} as Auth);

export function AuthUserProvider({ children }: any) {
  const auth = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
