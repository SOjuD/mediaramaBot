import { addMessage, botWrite } from '../bot-write';

export default function (params, evt) {

    const sendButton = document.querySelector('#rama_send');
    sendButton.classList.add('loading');

    const timer = setInterval(() => {

        if( params.messagesQueue.length ) return;

        addMessage(params.currentUserMessage, 'msg_wrap_user');
        if(params.timer){
            clearTimeout(params.timer);
            delete params.timer; 
        }
        
        params.currentUserMessage = '';
        evt.target.reset();
        
        sendButton.classList.remove('loading');
        
        botWrite( params, 5000 );
        clearInterval(timer);
    }, 200);
}