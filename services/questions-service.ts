import { db } from "../config/db-conf.ts";

export async function createQuestion(
  question: string,
  goodAnswers: string[],
  badAnswers: string[]
) {
  await db.lpush(`question:valid:${question}`, ...goodAnswers);
  await db.lpush(`question:invalid:${question}`, ...badAnswers);
}

export async function deleteQuestion(question: string) {
  await db.del(`question:valid:${question}`, `question:invalid:${question}`);
}

export async function getAllQuestions(): Promise<string[]> {
  const result = await db.keys("question:valid:*");

  return result.map((question) => {
    return (question.match(/:(.*)$/) as string[])[1];
  });
}
