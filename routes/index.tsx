import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <html>
      <Head>
        <title>Fresh App</title>
      </Head>
      <body className="bg-blue-600">
        <h1 className="text-center text-gray-100 text-4xl mt-16">
          Learning Quizz (bis)
        </h1>
        <QuestionList />
      </body>
    </html>
  );
}

function QuestionList() {
  return (
    <div className="flex">
      <h1 className="text-gray-100 text-xl mx-8">
        Voici la liste des questions :
      </h1>
    </div>
  );
}

function AddQuestion() {}
