import { constants, infosForQueries, resources } from "../static/storage-items.js";
import { getResource } from "./resource-getter.js";

function findCharacters(filter = characterFilterDefault) {
    return getResource(resources.CHARACTERS, filter);
}

function getTheOnlyCharacterFound() {
    const charactersFound = findCharacters();

    return charactersFound.length === 1 ? charactersFound[0] : false;
}

function characterFilterDefault(character) {
    const characteristicsStorage = localStorage.getItem(infosForQueries.CHARACTERISTICS);
    const missingCharacteristicsStorage = localStorage.getItem(infosForQueries.MISSING_CHARACTERISTICS);
    
    const characteristics = characteristicsStorage ? characteristicsStorage.split(constants.INFO_SPLITTER) : [];
    const missingCharacteristics = missingCharacteristicsStorage ? missingCharacteristicsStorage.split(constants.INFO_SPLITTER) : [];

    let matchCharacteristicCount = 0;
    for(const characteristic of characteristics) {
        character.characteristics.includes(characteristic) && ++matchCharacteristicCount;
    }

    let matchMissingCharacteristicCount = 0;
    for(const characteristic of missingCharacteristics) {
        !character.characteristics.includes(characteristic) && ++matchMissingCharacteristicCount;
    }

    return characteristics.length === matchCharacteristicCount && missingCharacteristics.length === matchMissingCharacteristicCount;
}

export { findCharacters, getTheOnlyCharacterFound }