function endGame() {
    const btnsAnswerQuestion = document.querySelectorAll('[data-answer-value]');

    disableAnswerButtons(btnsAnswerQuestion);
}

function disableAnswerButtons(btnsAnswerQuestion) {
    btnsAnswerQuestion.forEach((btnResponse) => {
        btnResponse.setAttribute('disabled', true);
    });
}

export { endGame }