import { addMessage, botWrite } from '../bot-write';

export default function sendForm(evt, params) {
    evt.preventDefault();

    const sendButton = document.querySelector('#rama_send');
    sendButton.classList.add('loading');

    const timer = setInterval(() => {
        if(params.botWrite) return;
        addMessage(params.currentUserMessage, 'msg_wrap_user');
        clearInterval(timer);
    }, 200);
    
    if(params.timer){
        clearTimeout(params.timer);
        delete params.timer; 
    }
    
    params.currentUserMessage = '';
    evt.target.reset();
    
    sendButton.classList.remove('loading');
    
    botWrite( params, 5000 );


}