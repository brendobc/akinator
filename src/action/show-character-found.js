const questionBox = document.getElementById('question-box');
const showCharacterBox = document.getElementById('show-character-box');
const nameCharacterHolder = showCharacterBox.querySelector('#name-character-holder');
const imgCharacter = showCharacterBox.querySelector('img');

function setCharacterFound(character) {
    showCharacterBox.setAttribute('data-character-found', character.name);
    showCharacterBox.setAttribute('data-character-found-message', `De acordo com meus cálculos, você pensou no(a) ${character.name}!`);
    imgCharacter.setAttribute('src', `../../assets/images/characters/character-${character.id}.png`);
}

function showCharacterFound() {
    questionBox.classList.add('d-none');
    showCharacterBox.classList.remove('d-none');
    nameCharacterHolder.innerText = showCharacterBox.dataset['characterFoundMessage'];
}

export { setCharacterFound, showCharacterFound }