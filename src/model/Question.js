import { getNextId } from "../helper/idHandler.js";
import { resources } from "../static/storage-items.js";

class Question {
    constructor(id, content, responses) {
        this.id = id;
        this.content = content;
        this.responses = responses;
    }
}

Question.Response = class {
    constructor(response, characteristics = [], missingCharacteristics = []) {
        this.response = response;
        this.characteristics = characteristics;
        this.missingCharacteristics = missingCharacteristics;
    }
}

export { Question }