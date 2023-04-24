import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../../firebase.config";

export const dataContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLoginBtn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // console.log(currentUser);
      }
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
  };

  console.log(user);
  return (
    <dataContext.Provider value={sharedData}>{children}</dataContext.Provider>
  );
};

export default AuthProviders;
