import { resources } from "../static/storage-items.js";

const idHandler = {
    [resources.CHARACTERS]: 0,
    [resources.QUESTIONS]: 0,
    [resources.FINAL_QUESTIONS]: 0
}

function getNextId(resource) {
    return idHandler[resource] !== undefined ? ++idHandler[resource] : false;
}

export { getNextId }