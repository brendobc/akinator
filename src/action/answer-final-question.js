import { endGame } from "../game/end.js";
import { showCharacterFound } from "./show-character-found.js";

function listenerAnswerFinalQuestion() {
    const showCharacterBox = document.getElementById('show-character-box');

    if(!this.hasAttribute('data-correct-answer')) {
        showCharacterBox.setAttribute(
            'data-character-found-message',
            `Achei que a pessoa era o(a) ${showCharacterBox.dataset['characterFound']}, mas acho que esta informação está errada :(`
        );
    }

    showCharacterFound();

    endGame();
}

export { listenerAnswerFinalQuestion }