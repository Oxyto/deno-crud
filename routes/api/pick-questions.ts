import { Handlers } from "$fresh/server.ts";
import {
  getAllQuestions,
  getInvalidAnswers,
  getValidAnswers,
} from "../../services/questions-service.ts";
import { getShuffleArray } from "../../utils/shuffle-array.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const questions = getShuffleArray(await getAllQuestions()).slice(0, 10);
    const response = await Promise.all(
      questions.map(async (question) => {
        const validAnswers = getShuffleArray(
          await getValidAnswers(question),
        ).slice(0, 2);
        const invalidAnswers = getShuffleArray(
          await getInvalidAnswers(question),
        );
        const answers = getShuffleArray(
          validAnswers.concat(invalidAnswers).slice(0, 4),
        );

        return {
          question: question,
          validAnswersCount: validAnswers.length,
          answers: answers,
        };
      }),
    );

    return Response.json(response);
  },
};
