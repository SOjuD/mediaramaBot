import witeLog from '../chat-control/write-log';
import { toggleInput } from '../chat-control';

export default function iterationMessage(params){
    try{
        const activeMessage = params.botMessages.shift();
        params.log.push(witeLog(activeMessage, 'bot'));
        toggleInput(params);

        return activeMessage;

    } catch (e){
        console.log(`Ошибка итерации сообщений: ${e}`)
        return 'Извините, сейчас я не могу писать, позвоните по одному из номеров указанных на сайте.';
    }
}