import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function Login() {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const authContext = useContext(AuthContext);
  console.log(authContext.name); // Now it will log "AuthContext"

  const clickToLogin = () => {
    setLogin(true);
  };

  const clickToSignup = () => {
    setLogin(false);
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

  const handleSignup = (e) => {
    e.preventDefault();
    authContext.createAccount(e.target.email.value, e.target.password.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    authContext.signIn(e.target.email.value, e.target.password.value);
  };

  return (
    <div className="mx-auto">
      <div className="container mx-auto ">
        <div className="flex flex-row justify-center items-center gap-6">
          <button className="btn rounded-3xl px-7" onClick={clickToSignup}>
            Signup
          </button>
          <button className="btn rounded-3xl px-7" onClick={clickToLogin}>
            Login
          </button>
        </div>
      </div>
      {/* This will sign up area */}
      {!login && (
        <div className="signup-area flex items-center justify-center my-11">
          {/* Signup form goes here */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSignup}>
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
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Signup
                </button>
              </div>
            </form>
          </div>
          {/* Add your signup form fields here */}
        </div>
      )}
      {/* this will be sign in area */}
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
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
