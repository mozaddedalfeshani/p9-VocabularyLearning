import React from "react";

export default function VocabularyCard({ vocab }) {
  return (
    <div className="p-4 rounded shadow">
      <h3 className="font-bold">{vocab.word}</h3>
      <p>Meaning: {vocab.meaning}</p>
      <p>Pronunciation: {vocab.pronunciation}</p>
      <p>Part of Speech: {vocab.part_of_speech}</p>
    </div>
  );
}
