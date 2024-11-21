import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signinIcon from "../assets/icons/signinIcon.png";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [login, setLogin] = useState(true); // State to toggle between login and signup
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupPhotoUrl, setSignupPhotoUrl] = useState("");
  const authContext = useContext(AuthContext); // Get authentication context
  const { googleLogin, signInUser } = useContext(AuthContext);
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Get the navigate function

  const clickToLogin = () => {
    setLogin(true);
  };

  const clickToSignup = () => {
    setLogin(false);
  };

  const handleGoogleLogin = async () => {
    await googleLogin(); // Wait for Google login to complete
    navigate(location?.state?.from?.pathname || "/"); // Navigate to the previous page or home page
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

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!signupPasswordError) {
      try {
        await authContext.createAccount(
          e.target.email.value,
          e.target.password.value,
          signupName,
          signupPhotoUrl
        );
        navigate(location?.state?.from?.pathname || "/"); // Navigate to the previous page or home page
      } catch (error) {
        console.error("Signup failed:", error);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInUser(e.target.email.value, e.target.password.value); // Attempt to sign in
      navigate(location?.state?.from?.pathname || "/"); // Navigate only on success
    } catch (error) {
      toast("Login Failed");
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  //
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
  return (
    <div className="mx-auto">
      {!login && (
        <div className="signup-area flex items-center justify-center my-11">
          <div className="card bg-base-100 w-full px-4 py-10 max-w-sm shrink-0 shadow-2xl">
            <iframe src="https://lottie.host/embed/7ef54e79-d507-4742-bc3e-f74354262fa3/AE2csfvfUB.json"></iframe>
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
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  <div>
                    <FaEye />
                  </div>
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
              </div> */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full pr-10"
                    value={signupPassword}
                    onChange={handleSignupPasswordChange}
                    required
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
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
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <img src={signinIcon} />
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
              {/* <div className="form-control">
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
                  <Link
                    to="/resetPassword"
                    className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full pr-10"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
                <label className="label">
                  <Link
                    to="/resetPassword"
                    className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
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
