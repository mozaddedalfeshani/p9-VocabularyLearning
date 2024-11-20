import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AuthContext } from "../contexts/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

export default function UpdateProfile() {
  const { user, setUser } = useContext(AuthContext);
  const { createAccount } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate
  console.log(user, setUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const image = e.target[1].value;
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image
    }).then(() => {
      // Profile updated!
      setUser({ ...user, displayName: name, photoURL: image });
      navigate("/"); // Navigate to home page
    }).catch((error) => {
      // An error occurred
      console.error("Error updating profile:", error);
    });
  };

  return (
    <div className="container mx-auto flex justify-center items-center my-5">
      <div className="card flex bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit}>
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
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
