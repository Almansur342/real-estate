import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



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

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  }
  
  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  }


  const updateUserProfile = (name,photo) => {
    return updateProfile(auth.currentUser, {
       displayName: name,
       photoURL: photo,
     })
   }

  const AuthInfo = {
    loader,
    user,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleLogin,
    githubLogin,
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