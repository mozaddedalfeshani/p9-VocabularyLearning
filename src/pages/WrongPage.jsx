import React from "react";
import { useNavigate } from "react-router-dom";

export default function WrongPage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col min-h-full gap-10">
      <h1 className="text-center font-bold text-3xl">Page Not Found</h1>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Go Back to Home
      </button>
    </div>
  );
}
