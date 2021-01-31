import { toggleInput } from '../chat-control';

export default function iterationMessage(params){
    try{
        const activeMessage = params.botMessages.shift();
        toggleInput(params);

        return activeMessage;

    } catch (e){
        console.log(`Ошибка итерации сообщений: ${e}`)
        return 'Извините, сейчас я не могу писать, позвоните по одному из номеров указанных на сайте.';
    }
}