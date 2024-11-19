import React, { useContext, useEffect, useState } from "react";
import "animate.css"; // Import Animate.css
import Marquee from "react-fast-marquee";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

export default function StartLearning() {
  //fetch data from web like lesson page
  const [dataVoc, setdataVoc] = useState(null);
  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/mozaddedalfeshani/bslphotos/refs/heads/main/learnwithvocabularies.json"
        );
        const data = await response.json();
        setdataVoc(data);
      } catch (error) {
        setdataVoc("Failed to fetch lesson data");
      }
    };

    fetchVocabulary();
  }, []);

  const { user, logIn } = useContext(AuthContext);

  // console.log("from start learning", logIn);
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
      {/* Static Lesson Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {dataVoc ? (
          dataVoc.lessons.map((lesson) => (
            <Link key={lesson.lesson_no} to={`/lesson/${lesson.lesson_no}`}>
              <div className="card bg-blue-200 w-full aspect-w-9 aspect-h-16 shadow-xl text-center p-6">
                <h2 className="text-2xl font-bold">
                  Lesson {lesson.lesson_no}
                </h2>
                <p className="text-lg text-gray-700 mt-2">
                  {lesson.lesson_title}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>

      {/* Tutorial section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Learn the Alphabet
        </h2>
        <div className="flex justify-center mt-6">
          <iframe
            className="w-full sm:w-3/4 lg:w-1/2"
            height="450"
            src="https://www.youtube.com/embed/drlIUqRYM-w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="text-center mt-6">
          <Link to="/tutorials">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              View more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
