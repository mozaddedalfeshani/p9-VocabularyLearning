import React from "react";
import "animate.css";
import { Link } from "react-router-dom";

export default function VocabularyCard({ vocab }) {
  return (
    <div className="border p-4 card-compact card rounded-md shadow-lg bg-green-50">
      <div className="card-body">
        <h3 className="text-xl font-bold card-title">{vocab.word}</h3>
        <p className="text-gray-600">
          <span className="font-bold">Pronunciation:</span>{" "}
          {vocab.pronunciation}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Meaning:</span> {vocab.meaning}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Part of Speech:</span>{" "}
          {vocab.part_of_speech}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Difficulty: </span>
          {vocab.difficulty}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Example: </span>
          {vocab.example}
        </p>
      </div>
      <hr />
    </div>
  );
}
