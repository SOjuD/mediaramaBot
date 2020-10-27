import { toggleChat, restoreDiscussion, startDiscussion, toggleInput } from './chat-control';
import sendForm from './send-form';
import setCurrentMessage from './user-write';
import { getBotCookie } from './functions';

import './functions/tel-mask';

const form = document.querySelector('#ramabot');
const ramabotHeader = document.querySelector('.ramabot__header');

const ramaParams = {
    botMessages: [
        'Здравствуйте! Вам нужна помощь?',
        'Напишите, что вас интересует).',
        'Подскажите как к вам обращаться?',
        'у меня для вас есть предложение напишите свой номер я вам перезвоню.))'
    ],
    log: getBotCookie().log || [],
    isOpen: false,
    clientName: '',
    clientPhone: '',
    currentUserMessage: '',
    messagesQueue: [],
    handlerUrl: 'http://pathtofile.by'
};


ramabotHeader.addEventListener("click", () => { toggleChat(ramaParams); });
form.addEventListener("submit", (evt) => { sendForm(evt, ramaParams) });
form.addEventListener("input", (evt) => { setCurrentMessage(ramaParams, evt) });


if (ramaParams.log.length) restoreDiscussion(ramaParams);
else startDiscussion(ramaParams);

toggleInput(ramaParams);
