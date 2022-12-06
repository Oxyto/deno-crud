import { useState, useEffect } from "preact/hooks";
import config from "../config/conf.ts";
import { Question } from "../types/question.ts";

export default function QuestionsAnswers() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(
    (async () => {
      const response = await fetch(`${config.URL}/api/pick-questions`);

      setQuestions(await response.json());
    }) as () => void,
    []
  );
  return (
    <div>
      {questions.map((question) => {
        return <p>{question.question}</p>;
      })}
    </div>
  );
}
