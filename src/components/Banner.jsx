import React from "react";
import { Link } from "react-router-dom";
import "animate.css"; // Import Animate.css

export default function Banner() {
  const playClickSound = () => {
    const audio = new Audio("../src/assets/sounds/click.mp3"); // Path to the click sound file in the public directory
    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  };
  return (
    <div
      className="hero min-h-screen rounded-md "
      style={{
        backgroundImage:
          "url(https://png.pngtree.com/thumb_back/fh260/background/20240812/pngtree-top-view-various-colorful-english-vocabulary-image_16129633.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          {/* Animated Header */}
          <h1 className="animate__animated animate__fadeIn animate__delay-1s mb-5 text-4xl sm:text-5xl font-bold">
            Start Your Language Journey!
          </h1>
          {/* Animated Paragraph */}
          <p className="animate__animated animate__fadeIn animate__delay-2s mb-5">
            Explore lessons, build vocabulary, and master a new language with
            ease. Let's get started today!
          </p>
          {/* Animated Button */}
          <Link to="/start-learning">
            <button
              className="btn btn-primary animate__animated animate__bounceIn animate__delay-3s"
              onClick={playClickSound}>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
