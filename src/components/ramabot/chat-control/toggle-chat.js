import showWelcome from './show-welcome';
import editUnreadQueue from './edit-unread-queue';
import { startDiscussion } from '../chat-control';
import { getBotCookie } from '../functions';

export default function toggleChat(params) {

    const ramabotBodyOpen = document.querySelector('.ramabot__body_box');
    ramabotBodyOpen.classList.toggle("ramabot__body_hidden");

    params.isOpen = !params.isOpen;

    if( params.isOpen ) {
        editUnreadQueue(params);
        if(params.botTimer && !getBotCookie().log) {
            clearTimeout(params.botTimer);
            params.botTimer = '';
            startDiscussion(params);
        }
    }else {
        showWelcome(params.view.welcome);
    }
}