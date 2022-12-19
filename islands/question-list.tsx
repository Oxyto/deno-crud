import { useEffect, useState } from "preact/hooks";
import config from "../config/conf.ts";
import { QuestionScore } from "../types/question.ts";

export default function QuestionList() {
  const [questions, setQuestions] = useState<QuestionScore[]>([]);

  useEffect(
    (async () => {
      const response = await fetch(`${config.URL}/api/list-questions`);
      const list = await response.json();

      setQuestions(list);
    }) as () => void,
    [],
  );
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="w-64 bg-gray-900 text-center text-gray-100 text-xl mt-8">
        Voici la liste des questions :
      </h1>
      {questions.map((question) => {
        return (
          <div
            key={question.question}
            className="w-64 text-center text-lg text-gray-100"
          >
            <p>{question.question}</p>
            <p>({question.score}%)</p>
          </div>
        );
      })}
    </div>
  );
}
