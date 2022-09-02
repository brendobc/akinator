import { listenerAnswerCurrentQuestion } from "../action/answer-current-question.js";
import { listenerAnswerFinalQuestion } from "../action/answer-final-question.js";
import { infosForQueries } from "../static/storage-items.js";

function reset() {
    const questionBox = document.getElementById('question-box');
    const showCharacterBox = document.getElementById('show-character-box');
    const btnsAnswerQuestion = document.querySelectorAll('[data-answer-value]');
    const btnBegin = document.getElementById('begin');

    clearGameStorage();
    clearElementsData(questionBox, btnsAnswerQuestion, btnBegin, showCharacterBox);

    resetListeners(btnsAnswerQuestion);
}

function clearGameStorage() {
    localStorage.removeItem(infosForQueries.ASKED_QUESTIONS);
    localStorage.removeItem(infosForQueries.CHARACTERISTICS);
    localStorage.removeItem(infosForQueries.MISSING_CHARACTERISTICS);
}

function clearElementsData(questionBox, btnsAnswerQuestion, btnBegin, showCharacterBox) {
    const questionHolder = questionBox.querySelector('#question-holder');

    btnsAnswerQuestion.forEach((btnResponse) => {
        btnResponse.removeAttribute('data-missing-characteristics');
        btnResponse.removeAttribute('data-missing-characteristics');
        btnResponse.removeAttribute('data-correct-answer');
        btnResponse.removeAttribute('disabled');
    });

    for(const data in questionBox.dataset) {
        delete questionBox.dataset[data];
    }

    questionBox.classList.remove('d-none');
    showCharacterBox.classList.add('d-none');

    questionHolder.innerText = '';

    btnBegin.removeAttribute('disabled');
}

function resetListeners(btnsAnswerQuestion) {
    btnsAnswerQuestion.forEach((btnResponse) => {
        btnResponse.addEventListener('click', listenerAnswerCurrentQuestion);
        btnResponse.removeEventListener('click', listenerAnswerFinalQuestion);
    });
}

export { reset }