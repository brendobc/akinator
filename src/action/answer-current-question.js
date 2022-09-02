import { getTheOnlyCharacterFound } from "../controller/characters.js";
import { getCharacterFinalQuestion } from "../controller/final-question.js";
import { getNewQuestion } from "../controller/questions.js";
import { constants, infosForQueries } from "../static/storage-items.js";
import { setCurrentQuestion } from "./set-current-question.js";
import { setFinalQuestion } from "./set-final-question.js";
import { setCharacterFound } from "./show-character-found.js";

const questionBox = document.getElementById('question-box');

function updateInfosGameLocalStorage(characteristics, missingCharacteristics) {
    const askedQuestions = localStorage.getItem(infosForQueries.ASKED_QUESTIONS);
    const characteristicsStorage = localStorage.getItem(infosForQueries.CHARACTERISTICS);
    const missingCharacteristicsStorage = localStorage.getItem(infosForQueries.MISSING_CHARACTERISTICS);

    let characteristicsToSave;
    let missingCharacteristicsToSave;

    if(characteristics.length) {
        characteristicsToSave =
            (characteristicsStorage ? characteristicsStorage + constants.INFO_SPLITTER : '') +
            characteristics.join(constants.INFO_SPLITTER);
    }

    if(missingCharacteristics.length) {
        missingCharacteristicsToSave =
            (missingCharacteristicsStorage ? missingCharacteristicsStorage + constants.INFO_SPLITTER : '') +
            missingCharacteristics.join(constants.INFO_SPLITTER);
    }

    localStorage.setItem(
        infosForQueries.ASKED_QUESTIONS,
        (askedQuestions ? askedQuestions + constants.INFO_SPLITTER : '') + questionBox.dataset['currentQuestionId']
    );

    characteristicsToSave && localStorage.setItem(infosForQueries.CHARACTERISTICS, characteristicsToSave);

    missingCharacteristicsToSave && localStorage.setItem(infosForQueries.MISSING_CHARACTERISTICS, missingCharacteristicsToSave);
}

function answerCurrentQuestion(characteristics, missingCharacteristics) {
    updateInfosGameLocalStorage(characteristics, missingCharacteristics);
    const characterFound = getTheOnlyCharacterFound();

    if(characterFound) {
        setCharacterFound(characterFound);
        setFinalQuestion(getCharacterFinalQuestion(characterFound));
    } else {
        setCurrentQuestion(getNewQuestion());
    }
}

function listenerAnswerCurrentQuestion() {
    const characteristics = this.dataset['characteristics'];
    const missingCharacteristics = this.dataset['missingCharacteristics'];

    answerCurrentQuestion(
        characteristics ? characteristics.split(constants.INFO_SPLITTER) : [],
        missingCharacteristics ? missingCharacteristics.split(constants.INFO_SPLITTER) : []
    )
}

export { listenerAnswerCurrentQuestion }