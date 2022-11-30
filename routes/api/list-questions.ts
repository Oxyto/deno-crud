import { Handlers } from "$fresh/server.ts";
import { getAllQuestions } from "../../services/questions-service.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const questionsList = await getAllQuestions();

    return Response.json(questionsList);
  },
};
