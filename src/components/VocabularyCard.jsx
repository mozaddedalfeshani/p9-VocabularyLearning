import React from "react";
import "animate.css";
import { Link } from "react-router-dom";

export default function VocabularyCard({ vocab }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-bold">{vocab.word}</h3>
      <p className="text-gray-600">Pronunciation: {vocab.pronunciation}</p>
      <p className="text-gray-600">Meaning: {vocab.meaning}</p>
      <p className="text-gray-600">Part of Speech: {vocab.part_of_speech}</p>
      <p className="text-gray-600">Difficulty: {vocab.difficulty}</p>
      <p className="text-gray-600">Example: {vocab.example}</p>
    </div>
  );
}
