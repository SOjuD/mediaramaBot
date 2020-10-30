import { addMessage, botWrite } from '../bot-write';

export default function (params, evt) {

    const { messagesQueue, botWrite } = params;

    const sendButton = document.querySelector('#rama_send');
    sendButton.classList.add('loading');
    sendButton.disabled = true;

    const timer = setInterval(() => {
        if( messagesQueue.length && botWrite ) return;
            prepareToAddMessage(params, evt, sendButton);
        clearInterval(timer);
    }, 200);
}


function prepareToAddMessage (params, evt, sendButton) {

    clearTimeout( params.userTimer );
    params.userTimer = '';

    addMessage(params.currentUserMessage, 'msg_wrap_user');
    if(params.timer){
        clearTimeout(params.timer);
        delete params.timer; 
    }
    
    params.currentUserMessage = '';
    evt.target.reset();
    
    sendButton.classList.remove('loading');
    sendButton.disabled = false;
    params.userTimer = setTimeout( () => { 
        botWrite( params, 0 ); 
    }, 5000 )
}