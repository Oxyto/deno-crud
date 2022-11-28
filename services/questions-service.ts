import { db } from "../config/db-conf.ts";
import { formatQuestion } from "../utils/format-question.ts";

export async function createQuestion(
  question: string,
  validAnswers: string[],
  invalidAnswers: string[]
) {
  await db.lpush(`question:valid:${formatQuestion(question)}`, ...validAnswers);
  await db.lpush(
    `question:invalid:${formatQuestion(question)}`,
    ...invalidAnswers
  );
}

export async function deleteQuestion(question: string) {
  await db.del(
    `question:valid:${formatQuestion(question)}`,
    `question:invalid:${formatQuestion(question)}`
  );
}

export async function getAllQuestions() {
  const result = await db.keys("question:valid:*");

  return result.map((question) => {
    return (question.match(/:(.*)$/) as string[])[1];
  });
}

export async function getValidAnswers(question: string) {
  const validAnswers = await db.lrange(
    `question:valid:${formatQuestion(question)}`,
    0,
    -1
  );

  return validAnswers;
}

export async function getInvalidAnswers(question: string) {
  const invalidAnswers = await db.lrange(
    `question:invalid:${formatQuestion(question)}`,
    0,
    -1
  );

  return invalidAnswers;
}
