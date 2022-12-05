import { Head } from "$fresh/runtime.ts";

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
      </body>
    </html>
  );
}
