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
      toast(`${user ? ("Hello", user.displayName) : ""}`, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
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
      <Toaster position="bottom-center" reverseOrder={true} />
    </div>
  );
}
