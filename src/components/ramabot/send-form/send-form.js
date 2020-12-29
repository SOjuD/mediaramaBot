import { loadingQueue } from '../user-write';
import { sendData } from '../send-form';

export default function sendForm(evt, params) {
    evt.preventDefault();
    const currentField = evt.target.querySelector(".ramabot-input-field:not(.d-none)");
    const currentVal = currentField.value;
    // если поле с номером заполнено то мы отправляем форму немедленно, не дожидаясь окончания диалога,
    // при желании можно отправку и перенести в loadingQueue
    if( evt.target.querySelector('[type="tel"]').value) sendData(params);
    if(currentVal.length >= 3) {
        currentField.classList.remove('field-error');
        loadingQueue(params, evt);
    }else{
        currentField.classList.add('field-error');
    }
}