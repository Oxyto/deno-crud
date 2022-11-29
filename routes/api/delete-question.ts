import { Handlers } from "$fresh/server.ts";
import { deleteQuestion } from "../../services/questions-service.ts";

export const handler: Handlers = {
  async DELETE(req, _ctx) {
    const { question } = await req.json();
    const isDeleted = await deleteQuestion(question);

    if (isDeleted) return new Response("OK");
    return new Response("ERR: Question not found", { status: 404 });
  },
};
