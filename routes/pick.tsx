import { Head } from "$fresh/runtime.ts";
import QuestionsAnswers from "../islands/questions-answers.tsx";

export default function Quizz() {
  return (
    <html>
      <Head>
        <title>Answer questions</title>
      </Head>
      <body className="bg-blue-600">
        <h1 className="leading-relaxed mx-auto w-96 h-16 bg-gray-900 text-center text-gray-100 text-4xl mt-16">
          Answer the questions!
        </h1>
        <a href="/" className="flex w-96 mx-auto">
          <h2 className="mx-auto w-96 bg-black text-center text-gray-100 hover:scale-105 transition-transform transform-gpu">
            Return to homepage
          </h2>
        </a>
        <QuestionsAnswers />
      </body>
    </html>
  );
}
