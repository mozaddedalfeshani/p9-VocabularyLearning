import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
