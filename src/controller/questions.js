import { constants, infosForQueries, resources } from "../static/storage-items.js";
import { getResource } from "./resource-getter.js";

function getNewQuestion(filter = questionFilterDefault) {
    const questions = getResource(resources.QUESTIONS, filter);

    const questionNumber = Math.ceil(Math.random() * questions.length);

    return questions[questionNumber - 1];
}

function questionFilterDefault(question) {
    const askedQuestionsStorage = localStorage.getItem(infosForQueries.ASKED_QUESTIONS);
    if(!askedQuestionsStorage) return true;

    const askedQuestionsId = askedQuestionsStorage.split(constants.INFO_SPLITTER);

    return !askedQuestionsId.includes(String(question.id));
}

export { getNewQuestion }