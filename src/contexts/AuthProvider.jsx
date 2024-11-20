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
import toast from "react-hot-toast";

const notify = (message) => toast(message);

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
      notify("Successfully logged in with Google"); // Notify on successful Google login
    });
  };

  const createAccount = (email, password, displayName, photoURL) => {
    createUserWithEmailAndPassword(getAuth(app), email, password).then(
      (userCredential) => {
        updateUserProfile(displayName, photoURL);
        notify("Account created successfully"); // Notify on successful account creation
      }
    );
  };

  const signInUser = (email, password) => {
    if (!email) {
      return;
    }
    signInWithEmailAndPassword(getAuth(app), email, password)
      .then((result) => {
        setUser(result.user);
        notify("Successfully logged in with email and password"); // Notify on successful email/password login
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        notify("Error signing in: " + errorMessage); // Notify on wrong credentials
      });
  };

  const signOutUser = () => {
    signOut(getAuth(app))
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        notify("Error signing out: " + error.message); // Notify on sign out error
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
          notify("Error updating profile: " + error.message); // Notify on profile update error
        });
    }
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(getAuth(app), email)
      .then(() => {
        notify("Password reset email sent successfully"); // Notify on successful password reset email sent
      })
      .catch((error) => {
        notify("Error sending password reset email: " + error.message); // Notify on failed password reset
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
