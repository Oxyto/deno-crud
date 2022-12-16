import { useState } from "preact/hooks";
import config from "../config/conf.ts";

interface AnswerProp {
  question: string;
  answer: string;
  validAnswersCount: number;
  answersCount: Map<string, number>;
  setAnswersCount: (value: Map<string, number>) => void;
}

async function sendAnswer(
  setValidate: (value: string) => void,
  {
    question,
    answer,
    validAnswersCount,
    answersCount,
    setAnswersCount,
  }: AnswerProp
) {
  if ((answersCount.get(question) ?? 0) >= validAnswersCount) return;

  const response = await fetch(`${config.URL}/api/send-answer`, {
    method: "POST",
    body: JSON.stringify({
      question: question,
      answer: answer,
    }),
  });
  const validate = await response.json();

  setValidate(validate.valid ? "text-green-500" : "text-red-500");
  answersCount.set(question, (answersCount.get(question) ?? 0) + 1);
  setAnswersCount(answersCount);
}

export default function Answer(props: AnswerProp) {
  const [validate, setValidate] = useState<string>();

  return (
    <input
      className={"text-center w-96 h-8 " + validate}
      type="submit"
      value={props.answer}
      onClick={() => sendAnswer(setValidate, props)}
    />
  );
}
