export interface difficultyLevel {
  name: string;
  code: string;
}

export interface categoryType {
  id: number;
  name: string;
}
export interface quizCategoryType {
  trivia_categories: Array<categoryType>;
}

export interface questionAnswers {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
  selectedAnswer?: string;
}
export interface quizQuestion {
  response_code: number;
  results: Array<questionAnswers>;
}
