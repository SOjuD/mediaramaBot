import { createChat } from './chat-control';

import { getBotCookie } from './functions';

import './functions/tel-mask';


const ramaParams = {
    botMessages: [
        'Здравствуйте! Вам нужна помощь?',
        'Напишите, что вас интересует).',
        'Подскажите как к вам обращаться?',
        'У меня для вас есть предложение напишите свой номер я вам перезвоню.))',
        'Спасибо, я скоро перезвоню.'
    ],
    log: getBotCookie().log || [],
    isOpen: false,
    userTimer: '',
    messagesQueue: [],
    unreadMessages: [],
    botWrite: false,
    handlerUrl: 'http://pathtofile.by/mail.php',
    view: {
        name: 'Александр',
        photo: '../assets/img/manager.png',
        color: 'red'
    }
};


createChat(ramaParams);


