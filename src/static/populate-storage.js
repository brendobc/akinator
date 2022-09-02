//This file will be delete soon
//It populates the storage while this action is manual

import { getNextId } from "../helper/idHandler.js";
import { Character } from "../model/Character.js";
import { FinalQuestion } from "../model/FinalQuestion.js";
import { Question } from "../model/Question.js";
import { infosForQueries, resources } from "./storage-items.js";

const c = {
    COMENTA_SOBRE_FUTEBOL: 'COMENTA_SOBRE_FUTEBOL',
    MULTIPLAS_SQUADS: 'MULTIPLAS_SQUADS',
    DOCKETEER_MAIS_DE_ANO: 'DOCKETEER_MAIS_DE_ANO',
    DOCKETEER_MAIS_DE_DOIS_ANOS: 'DOCKETEER_MAIS_DE_DOIS_ANOS',
    JA_FOI_AO_ESCRITORIO: 'JA_FOI_AO_ESCRITORIO',
    MORA_EM_SP_ESTADO: 'MORA_EM_SP_ESTADO',
    TEM_OCULOS: 'TEM_OCULOS'
};

(function populateStorage() {
    localStorage.setItem(resources.CHARACTERS, JSON.stringify(getCharacters()));
    localStorage.setItem(resources.QUESTIONS, JSON.stringify(getQuestions()));
    localStorage.setItem(resources.FINAL_QUESTIONS, JSON.stringify(getFinalQuestions()));
    localStorage.setItem(infosForQueries.ASKED_QUESTIONS, '');
})();

function getCharacters() {
    return [
        new Character(getNextId(resources.CHARACTERS), 'Brendo Cliber', [c.MULTIPLAS_SQUADS, c.DOCKETEER_MAIS_DE_ANO, c.JA_FOI_AO_ESCRITORIO, c.MORA_EM_SP_ESTADO, c.TEM_OCULOS]),
        new Character(getNextId(resources.CHARACTERS), 'Bruna Freiris', [c.COMENTA_SOBRE_FUTEBOL, c.MULTIPLAS_SQUADS, c.DOCKETEER_MAIS_DE_ANO, c.DOCKETEER_MAIS_DE_DOIS_ANOS, c.JA_FOI_AO_ESCRITORIO]),
        new Character(getNextId(resources.CHARACTERS), 'Everton Camacho', [c.MORA_EM_SP_ESTADO, c.DOCKETEER_MAIS_DE_ANO, c.TEM_OCULOS]),
        new Character(getNextId(resources.CHARACTERS), "Fernando 'Matt' Alvarez", [c.MULTIPLAS_SQUADS, c.DOCKETEER_MAIS_DE_ANO, c.DOCKETEER_MAIS_DE_DOIS_ANOS, c.JA_FOI_AO_ESCRITORIO, c.MORA_EM_SP_ESTADO, c.TEM_OCULOS]),
        new Character(getNextId(resources.CHARACTERS), 'Gabriel Giovani', [c.COMENTA_SOBRE_FUTEBOL, c.MULTIPLAS_SQUADS, c.DOCKETEER_MAIS_DE_ANO, c.MORA_EM_SP_ESTADO]),
        new Character(getNextId(resources.CHARACTERS), 'Larissa Barbosa', [c.JA_FOI_AO_ESCRITORIO]),
        new Character(getNextId(resources.CHARACTERS), 'Lucas Becker', [c.MULTIPLAS_SQUADS, c.TEM_OCULOS]),
        new Character(getNextId(resources.CHARACTERS), 'Marco Nicodemo', [c.COMENTA_SOBRE_FUTEBOL, c.MULTIPLAS_SQUADS, c.DOCKETEER_MAIS_DE_ANO, c.DOCKETEER_MAIS_DE_DOIS_ANOS, c.JA_FOI_AO_ESCRITORIO, c.MORA_EM_SP_ESTADO, c.TEM_OCULOS]),
        new Character(getNextId(resources.CHARACTERS), 'Paulo Victor', [c.MULTIPLAS_SQUADS]),
        new Character(getNextId(resources.CHARACTERS), 'Robson Cruz (CR7)', [c.MULTIPLAS_SQUADS, c.DOCKETEER_MAIS_DE_ANO, c.JA_FOI_AO_ESCRITORIO, c.MORA_EM_SP_ESTADO]),
        new Character(getNextId(resources.CHARACTERS), 'Neuri (vovô)', [c.MULTIPLAS_SQUADS, c.DOCKETEER_MAIS_DE_ANO, c.DOCKETEER_MAIS_DE_DOIS_ANOS, c.JA_FOI_AO_ESCRITORIO, c.MORA_EM_SP_ESTADO])
    ];
}

function getQuestions() {
    return [
        new Question(
            getNextId(resources.QUESTIONS),
            'Ele(a) comenta sobre futebol nas dailies?',
            [
                new Question.Response('YES', [c.COMENTA_SOBRE_FUTEBOL], []),
                new Question.Response('NO', [], [c.COMENTA_SOBRE_FUTEBOL])
            ]
        ),
        new Question(
            getNextId(resources.QUESTIONS),
            'Ele(a) já participou de uma squad além do company?',
            [
                new Question.Response('YES', [c.MULTIPLAS_SQUADS], []),
                new Question.Response('NO', [], [c.MULTIPLAS_SQUADS])
            ]
        ),
        new Question(
            getNextId(resources.QUESTIONS),
            'Ele(a) é um docketeer há mais de um ano?',
            [
                new Question.Response('YES', [c.DOCKETEER_MAIS_DE_ANO], []),
                new Question.Response('NO', [], [c.DOCKETEER_MAIS_DE_ANO, c.DOCKETEER_MAIS_DE_DOIS_ANOS])
            ]
        ),
        new Question(
            getNextId(resources.QUESTIONS),
            'Ele(a) é um docketeer há mais de dois anos?',
            [
                new Question.Response('YES', [c.DOCKETEER_MAIS_DE_ANO, c.DOCKETEER_MAIS_DE_DOIS_ANOS], []),
                new Question.Response('NO', [], [c.DOCKETEER_MAIS_DE_DOIS_ANOS])
            ]
        ),
        new Question(
            getNextId(resources.QUESTIONS),
            'Essa pessoa já foi ao escritório alguma vez?',
            [
                new Question.Response('YES', [c.JA_FOI_AO_ESCRITORIO], []),
                new Question.Response('NO', [], [c.JA_FOI_AO_ESCRITORIO])
            ]
        ),
        new Question(
            getNextId(resources.QUESTIONS),
            'Essa pessoa mora no estado de São Paulo?',
            [
                new Question.Response('YES', [c.MORA_EM_SP_ESTADO], []),
                new Question.Response('NO', [], [c.MORA_EM_SP_ESTADO])
            ]
        ),
        new Question(
            getNextId(resources.QUESTIONS),
            'Essa pessoa tem óculos (para descanso, miopia, astigmatismo)?',
            [
                new Question.Response('YES', [c.TEM_OCULOS], []),
                new Question.Response('NO', [], [c.TEM_OCULOS])
            ]
        )
    ];
}

function getFinalQuestions() {
    return [
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), 'Essa pessoa vive bufando "Oh céus" por aí?', 'YES', 1),
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), 'Estamos falando de uma das maiores inspirações para fazermos figurinhas no slack? :noh-deu-ruim:', 'YES', 2),
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), 'Essa pessoa simplesmente AMA chocolate?', 'YES', 3),
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), 'Essa pessoa faz a melhor imitação uma tartaruga gemendo aqui na Docket?', 'YES', 4),
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), 'Essa pessoa largou a vida de fast-food por conta de traumas?', 'YES', 5),
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), 'Essa pessoa é a maior karateca desse Brasil?', 'YES', 6),
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), 'Por acaso, estamos falando de um fenômeno da música vindo diretamente do interior de Santa Catarina?', 'YES', 7),
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), '?', 'YES', 8),
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), 'Essa pessoa tem uma máfia de lanches em MG?', 'YES', 9),
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), 'Essa pessoa dá AULASSS de finanças?', 'YES', 10),
        new FinalQuestion(getNextId(resources.FINAL_QUESTIONS), 'Será que estamos falando de um dos maiores sommelieres de vinho daqui da Docket?', 'YES', 11),
    ];
}