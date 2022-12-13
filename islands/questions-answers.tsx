import { useState, useEffect } from "preact/hooks";
import config from "../config/conf.ts";
import { Question } from "../types/question.ts";
import Answer from "./answers.tsx";

export default function QuestionsAnswers() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answersCount, setAnswersCount] = useState(new Map<string, number>());

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
          <div className="flex flex-col justify-center items-center mt-8 mb-8">
            <h2 className="text-gray-100 bg-gray-800 w-96 text-2xl text-center">
              {question.question}
            </h2>
            {question.answers.map((answer) => {
              return (
                <Answer
                  question={question.question}
                  answer={answer}
                  answersCount={answersCount}
                  setAnswersCount={setAnswersCount}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
