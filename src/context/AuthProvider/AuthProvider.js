import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const githubLogIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const emailVarify = () => {
    return sendEmailVerification(auth.currentUser);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.uid) {
        setUser(currentUser);
      }
      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  const userInfo = {
    user,
    createUser,
    updateUserProfile,
    userLogin,
    logOut,
    googleLogin,
    githubLogIn,
    loading,
    emailVarify,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
