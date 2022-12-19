export interface Question {
  question: string;
  validAnswersCount?: number;
  answers: string[];
}

export interface QuestionScore {
  question: string;
  score: number;
}
