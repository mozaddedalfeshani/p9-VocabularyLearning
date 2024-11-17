import React from "react";
import CountUp from "react-countup";

function SuccessSection() {
  return (
    <section className="bg-base-100 py-12 md:py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Achievements
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          We're proud of the progress we've made in helping users learn and
          grow. Here's a glimpse of our success so far!
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {/* User Count */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-3xl font-semibold text-gray-700">
              <CountUp start={0} end={1000} duration={3} separator="," />
            </h3>
            <p className="text-lg text-gray-600">Users Registered</p>
          </div>

          {/* Lesson Count */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-3xl font-semibold text-gray-700">
              <CountUp start={0} end={50} duration={3} separator="," />
            </h3>
            <p className="text-lg text-gray-600">Lessons Available</p>
          </div>

          {/* Vocabulary Count */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-3xl font-semibold text-gray-700">
              <CountUp start={0} end={2000} duration={3} separator="," />
            </h3>
            <p className="text-lg text-gray-600">Vocabulary Words</p>
          </div>

          {/* Tutorial Count */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-3xl font-semibold text-gray-700">
              <CountUp start={0} end={30} duration={3} separator="," />
            </h3>
            <p className="text-lg text-gray-600">Tutorials Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessSection;
