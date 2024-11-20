import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../hooks/Firebase.Config";

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
    createUserWithEmailAndPassword(getAuth(app), email, password).then(
      (userCredential) => {
        updateUserProfile(displayName, photoURL);
      }
    );
  };

  const signInUser = (email, password) => {
    // console.log(email, password);
    if (!email) {
      return;
    }
    signInWithEmailAndPassword(getAuth(app), email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in", errorCode, errorMessage);
      });
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
          setUser({ ...auth.currentUser, displayName, photoURL });
        })
        .catch((error) => {
          console.error("Error updating profile", error);
        });
    }
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(getAuth(app), email)
      .then(() => {
        console.log("Password reset email sent");
      })
      .catch((error) => {
        console.error("Error sending password reset email", error);
      });
  };
  

  const authInfo = {
    user,
    createAccount,
    updateUserProfile,
    googleLogin, // Added googleLogin to authInfo
    loading,
    signOutUser,
    signInUser,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
