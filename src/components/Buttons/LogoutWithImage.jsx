import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

export default function LogoutWithImage() {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    signOutUser();
    // console.log("Logout");
  };
  return (
    <button
      className="flex flex-row items-center btn justify-center "
      onClick={handleLogout}>
      <img
        src={user.photoURL}
        alt="User Avatar"
        className=" border w-10 h-10 rounded-full flex"
      />
      <p className=" text-pretty text-[24px]">Logout</p>
    </button>
  );
}
