import React, { createContext, useState } from "react";
export const AuthContext = createContext();
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../hooks/Firebase.Config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
    createAccount,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
