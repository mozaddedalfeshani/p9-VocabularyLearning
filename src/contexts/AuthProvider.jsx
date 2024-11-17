import React, { createContext, useState, useContext } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const login = (user) => {
    setAuth(user);
  };

  const logout = () => {
    setAuth(null);
  };

  const value = {
    auth,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
