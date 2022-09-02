import { constants } from "../static/storage-items.js";

const questionBox = document.getElementById('question-box');
const questionHolder = questionBox.querySelector('#question-holder');

function setCurrentQuestion(question) {
    if(!question) {
        questionHolder.innerText = 'não há mais perguntas!';
        return;
    }

    questionHolder.innerText = question.content;
    questionBox.setAttribute('data-current-question-id', question.id);

    const questionResponsesLength = question.responses.length;
    for(let i=0; i < questionResponsesLength; ++i) {
        const response = question.responses[i];
        const btnResponse = document.querySelector(`[data-answer-value="${response.response}"]`);

        const characteristics = response.characteristics;
        characteristics ?
            btnResponse.setAttribute('data-characteristics', characteristics.join(constants.INFO_SPLITTER)) :
            btnResponse.removeAttribute('data-characteristics');

        const missingCharacteristics = response.missingCharacteristics;
        missingCharacteristics ?
            btnResponse.setAttribute('data-missing-characteristics', missingCharacteristics.join(constants.INFO_SPLITTER)) :
            btnResponse.removeAttribute('data-missing-characteristics');
    }
}

export { setCurrentQuestion }