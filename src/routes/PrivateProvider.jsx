import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingUI from "../components/LoadingUI";

export default function PrivateProvider({ children }) {
  const { user, loading } = useContext(AuthContext); // Get user and loading state from AuthContext
  const location = useLocation(); // Get the current location

  if (loading) {
    return <LoadingUI />; // Show loading UI while authentication state is being determined
  }
  if (user && user?.email) {
    return children; // If user is authenticated, render the children components
  }
  return <Navigate state={{ from: location }} to="/login" />; // If not authenticated, navigate to login page with the current location as state
}
