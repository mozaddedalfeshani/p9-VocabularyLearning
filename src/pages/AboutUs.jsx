import React from "react";
import myPhoto from "../assets/images/myPhoto.jpg";

const SelfIntroductionCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto shadow-lg  bg-[#ffffffc0] rounded-xl p-6 space-y-6 md:space-y-0 md:space-x-6 mt-10 ">
      {/* Left side: Profile Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src={myPhoto} // Replace with your image URL
          alt="Murad's Profile"
          className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover shadow-md"
        />
      </div>

      {/* Right side: Info */}
      <div className="md:w-2/3 text-left space-y-4">
        {/* Name and Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Mozadded Alfeshani Murad
        </h2>
        <p className="text-gray-600 text-lg">CSE Student | DIU, Dhaka</p>

        {/* Introduction */}
        <div className="text-sm md:text-base text-gray-700 space-y-2">
          <p>
            I am a passionate computer science student with extensive experience
            in developing innovative projects. My journey includes creating a
            Python package for text-to-calculation, solving over 300 programming
            problems in Python and C++, and developing a mail server using
            Node.js on Linux.
          </p>
          <p>
            Recently, I published a research paper on AI-driven bird detection
            and built an EXE tool for background removal and augmentation in one
            click. My Python Tkinter-based projects have also gained
            appreciation for their utility.
          </p>
          <p>
            Currently, I am mastering React.js Full Stack Development while
            working on an AI-based bird detection project. My goal is to secure
            a position at FAANG and contribute to impactful technology
            development.
          </p>
          <p>In my free time, I enjoy gaming and learning new skills.</p>
        </div>

        {/* Links to Projects */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">My Projects:</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-500">
            <li>
              <a
                href="https://github.com/mozaddedalfeshani/smartwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                SmartWallet (Flutter-based)
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mozaddedalfeshani/mclx_ml_exe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                Machine Learning EXE (Background Removal)
              </a>
            </li>
            <li>
              <a
                href="https://mozaddedalfeshani.github.io/mclx/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                Windows Game Helper
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mozaddedalfeshani/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                All Repositories on GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Connect with Me:
          </h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.linkedin.com/in/mozaddedalfeshani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                LinkedIn: linkedin.com/in/mozaddedalfeshani
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/imurad.12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                Facebook: facebook.com/imurad.12
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function AboutUs() {
  return (
    <div>
      <SelfIntroductionCard />
    </div>
  );
}
