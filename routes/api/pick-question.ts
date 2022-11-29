import { Handlers } from "$fresh/server.ts";
import {
  getAllQuestions,
  getValidAnswers,
  getInvalidAnswers,
} from "../../services/questions-service.ts";
import { getShuffleArray } from "../../utils/shuffle-array.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const question = getShuffleArray(await getAllQuestions())[0];
    const validAnswer = getShuffleArray(await getValidAnswers(question))[0];
    const invalidAnswers = await getInvalidAnswers(question);
    const answers = getShuffleArray(
      [validAnswer, ...invalidAnswers].slice(0, 4)
    );

    return Response.json({
      question: question,
      answers: answers,
    });
  },
};
