import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

export default function PrivateProvider({ children }) {
  const { user } = useContext(AuthContext);
  console.log("Runnig the PrivateProvider", user);
  if (user) {
    return <div>{children}</div>;
  }
  return <Navigate to="/login" />;
}
