import { resources } from "../static/storage-items.js";
import { getResource } from "./resource-getter.js";

function getCharacterFinalQuestion(character) {
    const questions = getResource(resources.FINAL_QUESTIONS, (finalQuestion) => {
        return finalQuestion.characterId == character.id;
    });

    const questionNumber = Math.ceil(Math.random() * questions.length);

    return questions[questionNumber - 1];
}

export { getCharacterFinalQuestion }