import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingUI from "../components/LoadingUI";


export default function PrivateProvider({ children }) {
  const { user, loading } = useContext(AuthContext);
  console.log("Runnig the PrivateProvider", user, loading);

  if (loading) {
    return <LoadingUI />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/login" />;
}
