import React from "react";
import { Link } from "react-router-dom";

const lessons = Array.from({ length: 10 }, (_, i) => `Lesson-${i + 1}`);

export default function LetsLearn() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-10">Let's Learn</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {lessons.map((lesson, index) => (
          <Link
            key={index}
            to={`/lesson/${index + 1}`}
            className="border p-4 text-center rounded-md shadow-lg bg-blue-50">
            {lesson}
          </Link>
        ))}
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Tutorial</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video"
            allowFullScreen
            className="w-full h-full"></iframe>
        </div>
      </div>
      <div className="text-center">
        <Link
          to="/tutorials"
          className="btn btn-primary">
          View more
        </Link>
      </div>
    </div>
  );
}
