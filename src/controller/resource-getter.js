import { resources } from "../static/storage-items.js";

function filterResources(resource, filter) {
    const resourceList = JSON.parse(localStorage.getItem(resource));

    return resourceList.filter(filter);
}

const resourceGetter = {
    [resources.QUESTIONS]: (filter) => {
        return filterResources(resources.QUESTIONS, filter);
    },

    [resources.CHARACTERS]: (filter) => {
        return filterResources(resources.CHARACTERS, filter);
    },

    [resources.FINAL_QUESTIONS]: (filter) => {
        return filterResources(resources.FINAL_QUESTIONS, filter);
    },
}

function getResource(resource, filter) {
    return resourceGetter[resource](filter);
}

export { getResource }