import React, { createContext, useState } from "react";
export const AuthContext = createContext();
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../hooks/Firebase.Config";




const AuthProvider = ({ children }) => {


  
  const createAccount = (email, password) => {
    console.log("createAccount", email, password);
    createUserWithEmailAndPassword(getAuth(app), email, password).then(
      (userCredential) => {
        console.log("Account created successfully", userCredential);
      }
    );
  };

  const authInfo = {
    createAccount,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
