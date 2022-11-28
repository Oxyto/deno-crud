import { Handlers } from "$fresh/server.ts";
import { createQuestion } from "../../services/questions-service.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const { question, validAnswers, invalidAnswers } = await req.json();

    await createQuestion(question, validAnswers, invalidAnswers);
    return new Response("OK");
  },
};
