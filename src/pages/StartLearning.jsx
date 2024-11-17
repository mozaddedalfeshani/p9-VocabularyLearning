import React, { useState } from "react";
import "animate.css"; // Import Animate.css
import vocabularies from "../data/vocabularies.json"; // Import JSON data
import Marquee from "react-fast-marquee";
import VocabularyCard from "../components/VocabularyCard";

export default function StartLearning() {
  return (
    <div className="mx-auto mt-10 px-4">
      {/* Marquee Component with Custom Settings */}
      <Marquee
        gradient={false} // Disable gradient fade on the sides of the marquee
        speed={30} // Speed of the scrolling text
        pauseOnHover={true} // Pause when mouse hovers over the text
        direction="left" // Direction of scrolling (can also be "right")
      >
        <span className="text-xl font-semibold text-gray-800">
          Welcome to Lingo Bingo! Start learning new words today and expand your
          vocabulary in your chosen language. From common phrases to advanced
          terms, we help you speak confidently and fluently. Let's embark on
          this exciting learning journey together!
        </span>
      </Marquee>

      {/* Main Section with Animated Heading */}
      <div className="text-center mt-10">
        <h1 className="animate__animated animate__fadeIn animate__delay-1s text-4xl font-bold text-gray-900">
          Ready to Learn a New Language?
        </h1>
        <p className="animate__animated animate__fadeIn animate__delay-2s text-lg text-gray-600 mt-4">
          Explore lessons, build vocabulary, and master a new language with
          ease. Let's get started today!
        </p>
      </div>

      {/* Vocabulary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {vocabularies.map((vocab) => (
          <VocabularyCard key={vocab.id} vocab={vocab} />
        ))}
      </div>
    </div>
  );
}
