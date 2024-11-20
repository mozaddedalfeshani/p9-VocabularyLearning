import React, { useState } from "react";
import { FaVolumeUp } from "react-icons/fa"; // Import Font Awesome icon

export default function VocabularyCard({ vocab }) {
  const [isActive, setIsActive] = useState(false); // Track active state for card

  // Pronounce word using speech synthesis
  const pronounceWord = (word) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "ar-SA"; // Set to Arabic
      window.speechSynthesis.speak(utterance);
      console.log("Speaking:", word); // Debug log to confirm pronunciation
    } else {
      console.error("Speech synthesis not supported");
    }
  };

  // Handle card click
  const handleCardClick = () => {
    setIsActive(true); // Activate the card (change style)
    pronounceWord(vocab.word); // Pronounce the word
    setTimeout(() => {
      setIsActive(false); // Reset active state after 2 seconds
    }, 2000);
  };

  // Determine background color based on difficulty
  // const getDifficultyColor = (difficulty) => {
  //   switch (difficulty) {
  //     case "easy":
  //       return "bg-green-200";
  //     case "medium":
  //       return "bg-yellow-200";
  //     case "hard":
  //       return "bg-red-200";
  //     default:
  //       return "";
  //   }
  // };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy": // English for easy
      case "سهل": // Arabic for easy
        return "bg-green-200";
      case "medium": // English for medium
      case "متوسط": // Arabic for medium
        return "bg-yellow-200";
      case "hard": // English for hard
      case "صعب": // Arabic for hard
        return "bg-red-200";
      default:
        return "";
    }
  };

  return (
    <div
      className={`p-4 rounded shadow-lg cursor-pointer ${getDifficultyColor(
        vocab.difficulty
      )} ${isActive ? "border-blue-500" : ""}`} // Apply active styles when clicked
      onClick={handleCardClick} // Handle click event
      role="button" // Accessibility: treat div as a button
      tabIndex="0" // Make div focusable for keyboard interaction
    >
      <h3 className="font-bold">{vocab.word}</h3>
      <p>Meaning: {vocab.meaning}</p>
      <p>Pronunciation: {vocab.pronunciation}</p>
      <p>Part of Speech: {vocab.part_of_speech}</p>
      <p>When to Say: {vocab.when_to_say}</p> {/* Add when_to_say */}
      <p>Example: {vocab.example}</p> {/* Add example */}
      <p className="text-center mt-2 btn btn-ghost border shadow-md">
        <FaVolumeUp className="inline-block mr-1" /> Speak{" "}
        {/* Add speak icon and text */}
      </p>
    </div>
  );
}
