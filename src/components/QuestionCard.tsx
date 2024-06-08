import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
    question: string;
    questionNr: number;
    totalQuestions: number;
    answer: string[];
    userAnswer: AnswerObject | undefined;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuestionCard: React.FC<Props> = ({
    question,
    questionNr,
    totalQuestions,
    answer,
    userAnswer,
    callback,
}) => (
    <Wrapper>
        <p className="number">
            Question {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answer.map((answer) => (
                <ButtonWrapper
                key={answer}
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);

export default QuestionCard