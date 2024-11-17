import React from "react";
import learnwithvocabularies from "../data/learnwithvocabularies.json";
import VocabularyCard from "./VocabularyCard";

export default function cardShow() {
  return (
    <div>
      {/* Vocabulary Cards by Lessons */}
      {learnwithvocabularies.lessons.map((lesson) => (
        <div key={lesson.lesson_no} className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">
            {lesson.lesson_title}
          </h2>
          <p className="text-gray-600">{lesson.lesson_description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {lesson.vocabularies.map((vocab) => (
              <VocabularyCard key={vocab.id} vocab={vocab} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
