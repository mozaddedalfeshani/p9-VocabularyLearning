import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function UpdateProfile() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user, setUser);
  return (
    <div className="container mx-auto flex justify-center items-center my-5">
      <div className="card flex bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <h2 className="font-bold md:text-4xl text-center ">Update Profile</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder={`${user?.displayName || "User Name"}`}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Link</span>
            </label>
            <input
              type="text"
              placeholder={`${user?.photoURL || "default-photo-url"}`}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
