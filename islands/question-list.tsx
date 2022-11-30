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
      <h1 className="text-gray-100 text-xl mx-8 mt-8">
        Voici la liste des questions :
      </h1>
      {questions.map((question) => {
        return <p className="text-lg text-gray-100 mx-8">{question}</p>;
      })}
    </div>
  );
}
