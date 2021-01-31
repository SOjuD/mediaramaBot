import { loadingQueue } from '../user-write';

export default function sendForm(evt, params) {
    evt.preventDefault();
    const currentField = evt.target.querySelector(".ramabot-input-field:not(.d-none)");
    const currentVal = currentField.value;

    if(currentVal.length >= 3) {
        currentField.classList.remove('field-error');
        loadingQueue(params, evt);
    }else{
        currentField.classList.add('field-error');
    }
}