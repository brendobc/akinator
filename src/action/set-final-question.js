import { listenerAnswerCurrentQuestion } from "./answer-current-question.js";
import { listenerAnswerFinalQuestion } from "./answer-final-question.js";

function setFinalQuestion(finalQuestion) {
    const btnsAnswerQuestion = document.querySelectorAll('[data-answer-value]');
    const questionBox = document.getElementById('question-box');
    const questionHolder = questionBox.querySelector('#question-holder');

    btnsAnswerQuestion.forEach((btnResponse) => {
        btnResponse.removeAttribute('data-characteristics');
        btnResponse.removeAttribute('data-missing-characteristics');

        btnResponse.getAttribute('data-answer-value') === finalQuestion.answer &&
            btnResponse.setAttribute('data-correct-answer', true);
    });

    questionHolder.innerText = finalQuestion.content;
    questionBox.removeAttribute('data-current-question-id');

    removeListenersCurrentQuestion(btnsAnswerQuestion);
    addListenersFinalQuestion(btnsAnswerQuestion);
}

function removeListenersCurrentQuestion(btnsAnswerQuestion) {
    btnsAnswerQuestion.forEach((btnResponse) => {
        btnResponse.removeEventListener('click', listenerAnswerCurrentQuestion);
    });
}

function addListenersFinalQuestion(btnsAnswerQuestion) {
    btnsAnswerQuestion.forEach((btnResponse) => {
        btnResponse.addEventListener('click', listenerAnswerFinalQuestion);
    });
}

export { setFinalQuestion }