import { useState, useEffect } from 'react'
import Firebase from './Firebase';
import router from 'next/router'

interface User{
    uid:string;
    email:string;
}
const formatAuthUser = (user:User) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const authStateChanged = async (authState:any) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    var formattedUser:any = formatAuthUser(authState);
    setAuthUser(formattedUser);    
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email:string, password:string) =>
    Firebase.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (email:string, password:string) =>
    Firebase.auth().createUserWithEmailAndPassword(email, password);

  const signOut = () =>
    Firebase.auth().signOut().then(()=>{
      console.log("logged out")
    });

 const googleProvider = new Firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async  () => {
 const data= await Firebase.auth().signInWithPopup(googleProvider);
  return data.user;
}

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();

  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithGoogle, 
  } 
}