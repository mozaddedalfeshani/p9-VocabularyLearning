import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Murad", email: "Murad@gmail.com" });

  // start creating functions 
  const logIn = (email, password) => {
    setUser({
      name: "Murad", email: "murad@ma.com"
    });
  }; // <-- Close the logIn function properly

  const authInfo = {
    user,
    logIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
