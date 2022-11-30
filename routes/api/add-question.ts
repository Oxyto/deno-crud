import { Handlers } from "$fresh/server.ts";
import { createQuestion } from "../../services/questions-service.ts";
import config from "../../config/conf.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const { question, validAnswers, invalidAnswers } = await req.json();

    if (question.length === 0 || question.length > config.MAX_QUESTION_LENGTH) {
      return new Response(
        `ERR: Question must be under ${config.MAX_QUESTION_LENGTH} characters and not empty`,
        {
          status: 400,
        },
      );
    }
    if (
      validAnswers.length === 0 ||
      validAnswers.length > config.MAX_VALID_ANSWERS
    ) {
      return new Response(
        `ERR: Valid answers cannot be empty nor be more than ${config.MAX_VALID_ANSWERS}`,
        { status: 400 },
      );
    }
    if (
      invalidAnswers.length === 0 ||
      invalidAnswers.length > config.MAX_INVALID_ANSWERS
    ) {
      return new Response(
        `ERR: Valid answers cannot be empty nor be more than ${config.MAX_INVALID_ANSWERS}`,
        { status: 400 },
      );
    }
    await createQuestion(question, validAnswers, invalidAnswers);
    return new Response("OK");
  },
};
