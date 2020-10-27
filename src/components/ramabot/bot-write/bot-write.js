import { showPreloader, hidePreloader } from './toggle-preloader';
import addMessage from './add-message';
import iterationMessage from './iteration-message';



export default function botWrite(params, delay) {

    params.botWrite = true;

    if(params.botMessages.length){
        const message = iterationMessage(params);
        const duration = message.length * 150;
        const botMsgClass = 'msg_wrap';

        const timer = setTimeout( async () => {
             await setTimeout( showPreloader, 0 );
             await setTimeout( () => { addMessage( message, botMsgClass ) }, duration );
             await setTimeout( hidePreloader, duration);
         }, delay ); 
         params.timer = timer;
    }

    params.botWrite = false;

 }