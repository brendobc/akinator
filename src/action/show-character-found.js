const questionBox = document.getElementById('question-box');
const showCharacterBox = document.getElementById('show-character-box');
const nameCharacterHolder = showCharacterBox.querySelector('#name-character-holder');

function setCharacterFound(character) {
    showCharacterBox.setAttribute('data-character-found', character.name);
    showCharacterBox.setAttribute('data-character-found-message', `É claro que estamos falando do(a) ${character.name}!`);
}

function showCharacterFound() {
    questionBox.classList.add('d-none');
    showCharacterBox.classList.remove('d-none');
    nameCharacterHolder.innerText = showCharacterBox.dataset['characterFoundMessage'];
}

export { setCharacterFound, showCharacterFound }