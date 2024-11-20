import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";

export default function Root() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      toast(`Hello, ${user.displayName}`, {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }, [user]);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
