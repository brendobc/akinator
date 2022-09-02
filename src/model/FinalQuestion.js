import { getNextId } from "../helper/idHandler.js";
import { resources } from "../static/storage-items.js";

class FinalQuestion {
    constructor(id, content, answer, characterId) {
        this.id = id;
        this.content = content;
        this.answer = answer;
        this.characterId = characterId;
    }
}

export { FinalQuestion }