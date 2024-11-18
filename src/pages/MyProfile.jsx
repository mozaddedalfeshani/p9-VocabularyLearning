import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function MyProfile() {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="container mx-auto mt-5 ">
      <div className="card card-bordered">
        <div className="card-body d-flex flex-row flex justify-around items-center">
          <div className="left-side">
            <img
              src={user?.photoURL || "default-photo-url"}
              alt="User Photo"
              className="img-fluid rounded-circle rounded-full"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="right-side ml-4 card gap-4 card-bordered p-6">
            <h3 className="card-title">{user?.displayName || "User Name"}</h3>
            <p>{user?.email || "user@example.com"}</p>
            <button className="btn btn-danger" onClick={signOutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
