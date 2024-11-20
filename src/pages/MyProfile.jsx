import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto mt-5 card flex justify-center items-center">
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
        Welcome , {user?.displayName || "User Name"}
      </h1>
      <div className="">
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
            <button className="btn btn-danger">
              <Link to="/updateProfile">Update Profile</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
