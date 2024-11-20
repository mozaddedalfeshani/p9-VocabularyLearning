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

const notify = (message) => toast(message); // Function to show toast notifications

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null); // State to store the authenticated user
  const [loading, setLoading] = useState(true); // State to store the loading status

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
      setUser(user); // Set the user state when authentication state changes
      setLoading(false); // Set loading to false when authentication state is determined
    });
    return () => {
      unsubscribe(); // Cleanup the subscription on component unmount
    };
  }, []);

  const googleLogin = () => {
    return signInWithPopup(getAuth(app), provider).then((result) => {
      setUser(result.user); // Set the user state with the authenticated user
      setLoading(false); // Set loading to false
      notify("Successfully logged in with Google"); // Notify on successful Google login
      return result.user;
    });
  };

  // const createAccount = (email, password, displayName, photoURL) => {
  //   createUserWithEmailAndPassword(getAuth(app), email, password).then(
  //     (userCredential) => {
  //       updateUserProfile(displayName, photoURL);
  //       notify("Account created successfully"); // Notify on successful account creation
  //     }
  //   );
  // };

  const createAccount = (email, password, displayName, photoURL) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName, photoURL }).then(() => {
          notify("Account created successfully"); // Notify on successful account creation
          return user; // Return the user object to signal success
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        notify("Error creating account: " + errorMessage); // Notify on account creation error
        throw error; // Re-throw the error to let the caller handle it
      });
  };
// 
// 

  const signInUser = (email, password) => {
    return new Promise((resolve, reject) => {
      if (!email) {
        reject("Email is required");
        return;
      }
      signInWithEmailAndPassword(getAuth(app), email, password)
        .then((result) => {
          setUser(result.user); // Set the user state with the authenticated user
          notify("Successfully logged in with email and password"); // Notify on successful email/password login
          resolve(result.user); // Resolve the promise with the user data
        })
        .catch((error) => {
          const errorMessage = error.message;
          notify("Error signing in: " + errorMessage); // Notify on wrong credentials
          reject(errorMessage); // Reject the promise with the error message
        });
    });
  };

  const signOutUser = () => {
    signOut(getAuth(app))
      .then(() => {
        setUser(null); // Clear the user state on sign out
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
          setUser({ ...auth.currentUser, displayName, photoURL }); // Update the user state with the new profile information
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
    setUser,
    createAccount,
    updateUserProfile,
    googleLogin,
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
