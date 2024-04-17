import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoader(true);
    return signOut(auth)
  }

  const AuthInfo = {
    loader,
    user,
    createUser,
    signIn,
    logOut,
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log('user in auth',currentUser);
      setUser(currentUser);
      setLoader(false);
    })
    return () => unsubscribe();
  }, [])

  return (
     <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;