import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function PasswordReset() {
  const { resetPassword } = useContext(AuthContext);
  const handleResetEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);
    resetPassword(email);
  };
  return (
    <div className="container mx-auto flex justify-center items-center p-3">
      <div className="card  card-bordered flex justify-center items-center">
        <div className="card-body">
          <form
            className="flex justify-center items-center flex-col"
            onSubmit={handleResetEmail}>
            <div className="form-group">
              <label htmlFor="email">
                Enter your user account's verified email address and we will
                send you a password reset link.
              </label>
              {/* <label /htmlFor="email">Email</label> */}
              <input
                type="email"
                name="email"
                className="form-control border border-gray-300 my-5 rounded-md input-sm w-full"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            {/* captch here  */}

            <button type="submit" className="btn btn-warning">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
