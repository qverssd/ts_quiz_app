import { shuffleArray } from "./utils";

export type Question = {
    type: string;
    category: string;
    question: string;
    difficulty: string;
    correct_answer: string;
    incorrect_answers: string[];
};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = 
async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}?difficulty=
    ${difficulty}?type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
};