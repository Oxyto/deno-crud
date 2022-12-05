import { useState, useEffect } from "preact/hooks";
import config from "../config/conf.ts";

export default function QuestionList() {
  const [questions, setQuestions] = useState<string[]>([]);

  useEffect(
    (async () => {
      const response = await fetch(`${config.URL}/api/list-questions`);
      const list = await response.json();

      setQuestions(list);
    }) as () => void,
    []
  );
  return (
    <div className="flex-col">
      <h1 className="w-64 bg-gray-900 text-center text-gray-100 text-xl mx-auto mt-8 hover:scale-105 transition-transform transform-gpu">
        Voici la liste des questions :
      </h1>
      {questions.map((question) => {
        return (
          <p className="w-64 text-center text-lg text-gray-100 mx-auto transition-transform transform-gpu hover:scale-105">
            {question}
          </p>
        );
      })}
    </div>
  );
}
