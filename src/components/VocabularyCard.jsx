import { useState } from "react";
// Import Animate.css
import "animate.css";

const VocabularyCard = ({ vocab }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Toggle the visibility of details
  const toggleDetails = () => setShowDetails((prev) => !prev);

  // Determine the background color based on difficulty
  const bgColor =
    vocab.difficulty === "easy"
      ? "bg-green-200"
      : vocab.difficulty === "medium"
      ? "bg-yellow-200"
      : "bg-red-200";

  return (
    <div className={`card w-96 card-bordered text-black ${bgColor}`}>
      <div
        class={`badge  animate__bounceInUp ${
          vocab.difficulty === "easy" ? "badge-secondary" : "badge-primary"
        }`}>
        {vocab.difficulty}
      </div>
      <div className="card-body">
        <h2 className="card-title animate__bounceInUp">{vocab.word}</h2>
        <p className="text-sm">
          <span className="font-bold">Pronunciation: </span>
          {vocab.pronunciation}
        </p>
        <p className="text-sm">
          <span className="font-bold">Meaning: </span>
          {vocab.meaning}
        </p>
        <p className="text-sm">
          <span className="font-bold">Part of Speech:</span>{" "}
          {vocab.part_of_speech}
        </p>

        {/* Show more details when button is clicked */}
        {showDetails && (
          <>
            <p className="text-sm mt-2">
              <span className="font-bold">When to say: </span>
              {vocab.when_to_say}
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">Example: </span>
              {vocab.example}
            </p>
          </>
        )}

        <div className="card-actions justify-end">
          <button onClick={toggleDetails} className="btn btn-outline btn-sm">
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VocabularyCard;
