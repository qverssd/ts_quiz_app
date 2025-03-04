import React, { useState } from "react";
import { isNumberObject } from "util/types";
import { fetchQuizQuestions } from "./Api";
import { QuestionsState, Difficulty } from "./Api";
import { GlobalStyle, Wrapper } from "./App.styles";
import QuestionCard from "./components/QuestionCard";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS= 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        answer,
        correct,
        question: questions[number].question,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>TypeScript+React Quiz</h1>
     {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="start" onClick={startTrivia}>Start</button>
     ) : null}
     {!gameOver ? <p className="score">Score: {score}</p> : null}
     {loading ? <p>Loading questions....</p> : null}
     {!loading && !gameOver && (
      <QuestionCard
      questionNr={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answer={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      />
     )}
     {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
     ) : null}
    </Wrapper>
    </>
  );
};

export default App;