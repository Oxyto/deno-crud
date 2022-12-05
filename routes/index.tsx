import { Head } from "$fresh/runtime.ts";
import QuestionList from "../islands/question-list.tsx";

export default function Home() {
  return (
    <html>
      <Head>
        <title>Welcome!</title>
      </Head>
      <body className="bg-blue-600">
        <h1 className="leading-relaxed mx-auto w-96 h-16 bg-gray-900 text-center text-gray-100 text-4xl mt-16">
          Learning Quizz (bis)
        </h1>
        <a href="/pick">
          <p className="mx-auto w-96 bg-black text-gray-100 text-center">
            You can pick random questions here to answer
          </p>
        </a>
        <QuestionList />
      </body>
    </html>
  );
}
