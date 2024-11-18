import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "../hooks/Firebase.Config";
import { GoogleAuthProvider, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const googleLogin = () => {
    signInWithPopup(getAuth(app), provider).then((result) => {
      setUser(result.user);
      setLoading(false);
    });
  };

  const createAccount = (email, password, displayName, photoURL) => {
    console.log("createAccount", email, password);
    createUserWithEmailAndPassword(getAuth(app), email, password).then(
      (userCredential) => {
        setUser(userCredential.user);
        console.log(user);
        console.log("Account created successfully", userCredential);
        updateUserProfile(displayName, photoURL);
      }
    );
  };
  const signOutUser = () => {
    signOut(getAuth(app))
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out", error);
      });
  };

  const updateUserProfile = (displayName, photoURL) => {
    const auth = getAuth(app);
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      })
        .then(() => {
          console.log("Profile updated successfully");
        })
        .catch((error) => {
          console.error("Error updating profile", error);
        });
    }
  };

  const authInfo = {
    user,
    createAccount,
    updateUserProfile,
    googleLogin, // Added googleLogin to authInfo
    loading,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
