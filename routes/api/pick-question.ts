import { Handlers } from "$fresh/server.ts";
import { getAllQuestions, getValidAnswers, getInvalidAnswers } from "../../services/questions-service.ts";
import { pickRandomFromArray } from "../../utils/pick-random-from-array.ts"

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const question = pickRandomFromArray(await getAllQuestions());

    return new Response(JSON.stringify({
      question: question,
    }));
  },
};
