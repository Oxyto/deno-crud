import { Handlers } from "$fresh/server.ts";
import {
  getAllQuestions,
  getCountQuestion,
} from "../../services/questions-service.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const questionsList = await getAllQuestions();
    const result = Promise.all(
      questionsList.map(async (question) => {
        const [validScore, invalidScore] = await getCountQuestion(question);

        return {
          question: question,
          score: Math.floor(
            (validScore / ((validScore + invalidScore) || 1)) * 100,
          ),
        };
      }),
    );

    return Response.json(await result);
  },
};
