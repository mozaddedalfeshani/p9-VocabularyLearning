import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto mt-5 card flex flex-col  justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold text-gray-800 text-center">
          Welcome , {user?.displayName || "User Name"}
        </h1>
      </div>
      <div className="w-full md:w-auto flex flex-col md:flex-row ">
        <div className="card-body flex flex-col md:flex-row justify-around items-center">
          <div className="left-side mb-4 md:mb-0">
            <img
              src={user?.photoURL || "default-photo-url"}
              alt="User Photo"
              className="img-fluid rounded-circle rounded-full"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="right-side items-center justify-center flex flex-col md:ml-4 card gap-4 card-bordered p-6">
            <h3 className="card-title">{user?.displayName || "User Name"}</h3>
            <p>{user?.email || "user@example.com"}</p>
            <Link to="/profileEdit" className="w-full btn btn-outline">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
