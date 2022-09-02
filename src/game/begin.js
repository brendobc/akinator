import { setCurrentQuestion } from "../action/set-current-question.js";
import { getNewQuestion } from "../controller/questions.js";

function begin() {
    const btnBegin = document.getElementById('begin');
    btnBegin.setAttribute('disabled', true);
    
    setCurrentQuestion(getNewQuestion());
}

export { begin }