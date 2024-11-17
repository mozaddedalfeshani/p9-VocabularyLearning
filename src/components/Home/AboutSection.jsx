import React from "react";
import "animate.css";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="bg-gray-100 py-12 md:py-24 px-4 card shadow-lg border border-gray-200 rounded-lg animate__animated animate__fadeIn">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate__animated animate__fadeInDown">
          Our Mission
        </h2>
        <p className="text-xl text-gray-600 mb-8 animate__animated animate__fadeInUp">
          Our goal is to make language learning accessible, enjoyable, and
          interactive. By providing an easy-to-navigate platform, we help users
          enhance their vocabulary in a fun and engaging way.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-left animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              How It Works
            </h3>
            <p className="text-lg text-gray-600">
              Our website offers a collection of vocabulary words, with detailed
              information such as pronunciation, meaning, part of speech, and
              example sentences. You can learn vocabulary at your own pace by
              browsing through lessons and practicing through interactive
              quizzes.
            </p>
          </div>

          <div className="text-left animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Why Learn with Us?
            </h3>
            <p className="text-lg text-gray-600">
              We believe that language learning should be easy, accessible, and
              effective. With our carefully curated vocabulary list, users can
              gradually build their knowledge and improve their language skills
              in real-life situations.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/start-learning">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 animate__animated animate__pulse animate__infinite">
              Start Learning Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
