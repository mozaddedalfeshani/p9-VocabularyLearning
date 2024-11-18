import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupPhotoUrl, setSignupPhotoUrl] = useState("");
  const authContext = useContext(AuthContext);
  const { googleLogin, signInUser } = useContext(AuthContext);

  const clickToLogin = () => {
    setLogin(true);
  };

  const clickToSignup = () => {
    setLogin(false);
  };
  const handleGoogleLogin = () => {
    googleLogin();
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 6 characters long and include both lowercase and uppercase letters."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSignupPasswordChange = (e) => {
    const value = e.target.value;
    setSignupPassword(value);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(value)) {
      setSignupPasswordError(
        "Password must be at least 6 characters long and include both lowercase and uppercase letters."
      );
    } else {
      setSignupPasswordError("");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signupPasswordError) {
      authContext.createAccount(
        e.target.email.value,
        e.target.password.value,
        signupName,
        signupPhotoUrl
      );
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("Login", e.target.email.value, e.target.password.value);
    // signInUser(e.target.email.value, e.target.password.value);
    signInUser(e.target.email.value, e.target.password.value);
  };

  return (
    <div className="mx-auto">
      {/* <div className="container mx-auto ">
        <div className="flex flex-row justify-center  items-center gap-6">
          <button className="btn rounded-3xl " onClick={clickToSignup}>
            Signup
          </button>
          <button className="btn rounded-3xl px-7" onClick={clickToLogin}>
            Login
          </button>
        </div>
      </div> */}
      {/* This will sign up area */}
      {!login && (
        <div className="signup-area flex items-center justify-center my-11">
          <div className="card bg-base-100 w-full px-4 py-10 max-w-sm shrink-0 shadow-2xl">
            <h1 className="card-title text-center px-10">Signup</h1>
            <form className="card-body p-0" onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="photo URL"
                  className="input input-bordered"
                  value={signupPhotoUrl}
                  onChange={(e) => setSignupPhotoUrl(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={signupPassword}
                  onChange={handleSignupPasswordChange}
                  required
                />
                {signupPasswordError && (
                  <p className="text-red-500 text-xs mt-1">
                    {signupPasswordError}
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={!!signupPasswordError}>
                  Signup
                </button>
              </div>
              <p className="text-center">or</p>
            </form>
            <div className="form-control ">
              <button className="btn btn-secondary" onClick={handleGoogleLogin}>
                Sign up with Google
              </button>
            </div>
            <p className="text-center py-2">
              Already Have Account?{" "}
              <button className="text-blue-400" onClick={() => setLogin(true)}>
                Login
              </button>
            </p>
          </div>
        </div>
      )}
      {login && (
        <div className="login-area flex items-center justify-center py-10">
          {/* Login form goes here */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={!!passwordError}>
                  Login
                </button>
              </div>
              <p className="text-center">or</p>
              <div className="form-control ">
                <button
                  className="btn btn-secondary"
                  onClick={handleGoogleLogin}>
                  Login with Google
                </button>
              </div>
              <p className="text-center py-2">
                Don't have an account?{" "}
                <button
                  className="text-blue-400"
                  onClick={() => setLogin(false)}>
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
