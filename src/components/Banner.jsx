import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen rounded-xl"
      style={{
        backgroundImage:
          "url(https://png.pngtree.com/thumb_back/fh260/background/20240812/pngtree-top-view-various-colorful-english-vocabulary-image_16129633.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl sm:text-5xl font-bold">
            Start Your Language Journey!
          </h1>
          <p className="mb-5">
            Explore lessons, build vocabulary, and master a new language with
            ease. Let's get started today!
          </p>
          <Link to="/start-learning">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
