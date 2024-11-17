import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VocabularyDetails = () => {
  const { id } = useParams();
  const [vocabulary, setVocabulary] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/mozaddedalfeshani/bslphotos/e984ae6aad73850d8c58eb9f85211460c16b3b2e/vocabularies.json"
        );
        const data = await response.json();
        const vocab = data.find((item) => item.id === id);
        if (vocab) {
          setVocabulary(vocab);
        } else {
          setError("Vocabulary not found");
        }
      } catch (error) {
        setError("Failed to fetch vocabulary data");
      }
    };

    fetchVocabulary();
  }, [id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!vocabulary) {
    return <div>Loading...</div>;
  }

  const {
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    lesson_no,
    when_to_say,
    example,
  } = vocabulary;

  return (
    <div
      className="container mx-auto card shadow-sm border py-10"
      id="fullCard">
      <div className="card flex md:flex-row items-center justify-center">
        <div className="w-1/2 flex items-center justify-center">
          <h1
            className="card-title md:text-6xl font-bold text-center animate__animated animate__zoomInDown"
            id="wordId">
            {word}
          </h1>
        </div>
        <div className="card-body w-1/2 border animate__animated animate__zoomInDown rounded-tl-[25px] bg-base-200 rounded-bl-[25px]">
          <p>
            <strong>Pronunciation:</strong> {pronunciation}
          </p>
          <p>
            <strong>Meaning:</strong> {meaning}
          </p>
          <p>
            <strong>Part of Speech:</strong> {part_of_speech}
          </p>
          <p>
            <strong>Difficulty:</strong> {difficulty}
          </p>
          <p>
            <strong>Lesson No:</strong> {lesson_no}
          </p>
          <p>
            <strong>When to Say:</strong> {when_to_say}
          </p>
          <p>
            <strong>Example:</strong> {example}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VocabularyDetails;
