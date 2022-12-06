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
        return (
          <div className="flex-col content-center">
            <h2 className="text-gray-100 w-96 text-2xl text-center mx-auto">{question.question}</h2>
            {question.answers.map((answer) => {
              return (
                <input
                  className="text-center w-64 h-8 mx-auto"
                  type="submit"
                  value={answer}
                  onClick={() => console.log(question.question, answer)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
