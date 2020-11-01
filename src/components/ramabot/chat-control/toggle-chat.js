import showWelcome from './show-welcome';
import editUnreadQueue from './edit-unread-queue';


export default function toggleChat(params) {

    const ramabotBodyOpen = document.querySelector('.ramabot__body_box');
    ramabotBodyOpen.classList.toggle("ramabot__body_hidden");

    params.isOpen = !params.isOpen;

    if( params.isOpen ) editUnreadQueue(params);
    else showWelcome(params.view.welcome);
}