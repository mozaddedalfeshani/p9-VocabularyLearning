import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VocabularyCard from "../components/VocabularyCard"; // Import the VocabularyCard component

export default function Lesson() {
  const { id } = useParams();
  const [lessonData, setLessonData] = useState(null);

  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/mozaddedalfeshani/bslphotos/refs/heads/main/learnwithvocabularies.json"
        );
        const data = await response.json();
        const lesson = data.lessons.find(
          (lesson) => lesson.lesson_no === parseInt(id)
        );
        if (lesson) {
          setLessonData(lesson);
        } else {
          setLessonData("Lesson not found");
        }
      } catch (error) {
        setLessonData("Failed to fetch lesson data");
      }
    };

    fetchVocabulary();
  }, [id]);

  if (!lessonData) {
    return <div>Loading...</div>;
  }

  if (typeof lessonData === "string") {
    return <div>{lessonData}</div>;
  }

  return (
    <div>
      <h1 className="text-center font-bold text-xl">
        {lessonData.lesson_title}
      </h1>
      <p className="text-center font-bold text-xxl">
        {lessonData.lesson_description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {lessonData.vocabularies.map((vocab) => (
          <VocabularyCard key={vocab.id} vocab={vocab} />
        ))}
      </div>
    </div>
  );
}
