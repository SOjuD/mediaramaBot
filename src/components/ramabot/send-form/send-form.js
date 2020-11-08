import { loadingQueue } from '../user-write';
import { sendData } from '../send-form';

export default function sendForm(evt, params) {
    evt.preventDefault();
    
    // если поле с номером заполнено то мы отправляем форму немедленно, не дожидаясь окончания диалога,
    // при желании можно отправку и перенести в loadingQueue
    if( evt.target.querySelector('[type="tel"]').value) sendData(params);
    loadingQueue(params, evt);    
}