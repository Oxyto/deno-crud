import { Handlers } from "$fresh/server.ts";
import {
  getAllQuestions,
  getInvalidAnswers,
  getValidAnswers,
} from "../../services/questions-service.ts";
import { getShuffleArray } from "../../utils/shuffle-array.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const question = getShuffleArray(await getAllQuestions())[0];
    const validAnswers = getShuffleArray(await getValidAnswers(question)).slice(
      0,
      2,
    );
    const invalidAnswers = getShuffleArray(await getInvalidAnswers(question));
    const answers = getShuffleArray(
      validAnswers.concat(...invalidAnswers).slice(0, 4),
    );

    return Response.json({
      question: question,
      answers: answers,
    });
  },
};
