import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import app from "../../firebase.config";

export const dataContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email,password) => {
   return createUserWithEmailAndPassword(auth,email,password);
  };

  const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  } 

  const handleGoogleLoginBtn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      // console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogOut = () => {
    return signOut(auth);
  };
  const sharedData = {
    user,
    handleGoogleLoginBtn,
    handleLogOut,
    createUser,
    signInUser
  };

  // console.log(user);
  return (
    <dataContext.Provider value={sharedData}>{children}</dataContext.Provider>
  );
};

export default AuthProviders;
