import { listenerAnswerCurrentQuestion } from "../action/answer-current-question.js";

const btnAnswerCurrentQuestion = document.querySelectorAll('[data-answer-value]');

btnAnswerCurrentQuestion.forEach((btnResponse) => {
    btnResponse.addEventListener('click', listenerAnswerCurrentQuestion);
});