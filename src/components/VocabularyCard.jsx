import React, { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

export default function VocabularyCard({ vocab }) {
  const [isActive, setIsActive] = useState(false);

  const pronounceWord = (word) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "ar-SA";
      window.speechSynthesis.speak(utterance);
      console.log("Speaking:", word);
    } else {
      // console.error("Speech synthesis not supported");
    }
  };

  const handleCardClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 2000);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
      case "سهل":
        return "bg-green-200";
      case "medium":
      case "متوسط":
        return "bg-yellow-200";
      case "hard":
      case "صعب":
        return "bg-red-200";
      default:
        return "";
    }
  };

  return (
    <div
      className={`p-4 rounded shadow-lg cursor-pointer ${getDifficultyColor(
        vocab.difficulty
      )} ${isActive ? "border-blue-500" : ""}`}
      onClick={handleCardClick}
      role="button"
      tabIndex="0">
      <h3 className="font-bold">{vocab.word}</h3>
      <p>Meaning: {vocab.meaning}</p>
      {/* <p>Pronunciation: {vocab.pronunciation}</p>
      <p>Part of Speech: {vocab.part_of_speech}</p> */}
      <p>When to Say: {vocab.when_to_say}</p>
      {/* <p>Example: {vocab.example}</p> */}
      <p
        className="text-center mt-2 btn btn-ghost border shadow-md"
        onClick={() => pronounceWord(vocab.word)}>
        <FaVolumeUp className="inline-block mr-1" /> Speak
      </p>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-ghost "
        onClick={() => document.getElementById("my_modal_1").showModal()}>
        open modal
      </button>
      <dialog id="my_modal_1" className={`modal `}>
        <div className={`modal-box bg-green-100`}>
          <h3 className="font-bold text-lg">{vocab.word}</h3>
          <p className="py-2">Meaning: {vocab.meaning}</p>
          <p className="py-2">When to Say,</p>
          <p className="py-2"> {vocab.example}</p>
          <div className="modal-action">
            <Link to="/start-learning" className="btn">
              Back to Lesson
            </Link>

            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").close()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
