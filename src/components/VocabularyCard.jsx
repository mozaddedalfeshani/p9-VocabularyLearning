import { useState } from "react";

const VocabularyCard = ({ vocab }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Toggle the visibility of details
  const toggleDetails = () => setShowDetails((prev) => !prev);

  return (
    <div
      className={`card w-96 card-bordered bg-${
        vocab.difficulty === "easy"
          ? "green"
          : vocab.difficulty === "medium"
          ? "yellow"
          : "red"
      }-500 text-black`}>
      <div className="card-body">
        <h2 className="card-title">{vocab.word}</h2>
        <p className="text-sm">Pronunciation: {vocab.pronunciation}</p>
        <p className="text-sm">Meaning: {vocab.meaning}</p>
        <p className="text-sm">Part of Speech: {vocab.part_of_speech}</p>

        {/* Show more details when button is clicked */}
        {showDetails && (
          <>
            <p className="text-sm mt-2">When to say: {vocab.when_to_say}</p>
            <p className="text-sm mt-2">Example: {vocab.example}</p>
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
