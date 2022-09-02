import { getNextId } from "../helper/idHandler.js";
import { resources } from "../static/storage-items.js";

class Character {
    constructor(id, name, characteristics) {
        this.id = id;
        this.name = name;
        this.characteristics = characteristics;
    }
}

export { Character }