import { Handlers } from "$fresh/server.ts";
import {
  getInvalidAnswers,
  getValidAnswers,
} from "../../services/questions-service.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const { question, validAnswer } = await req.json();
    const validAnswers = await getValidAnswers(question);
    const invalidAnswers = await getInvalidAnswers(question);

    if (validAnswers.includes(validAnswer))
      return Response.json({ valid: true });
    if (invalidAnswers.includes(validAnswer))
      return Response.json({ valid: false });
    return new Response("ERR: Not an answer", { status: 400 });
  },
};
