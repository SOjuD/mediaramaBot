import { showPreloader, hidePreloader } from '../chat-control/toggle-preloader';
import addMessage from './add-message';
import iterationMessage from './iteration-message';
import { addToQueue, removeFromQueue } from './edit-queue';



export default function botWrite(params, delay, duration) {

    if(params.botMessages.length){
        
        params.botWrite = true;
        
        const timer = setTimeout( async () => {

            const { message, duration, botMsgClass } = botStartWrite(params, duration);

            await setTimeout( showPreloader, 0 );
            await setTimeout( () => { addMessage( message, botMsgClass ) }, duration );
            await setTimeout( () => { botFinishWrite(params, message) }, duration);
         }, delay ); 

         params.timer = timer;
    }
 }

 function botStartWrite(params, duration) {

    const message = iterationMessage(params);
    addToQueue(params, message);
    duration = duration || message.length * 150;

     return {
        message, 
        duration,
        botMsgClass: 'msg_wrap'
     }

 }

 function botFinishWrite(params, message) {
    hidePreloader();
    params.botWrite = false;
    removeFromQueue(params, message);
    params.botWrite = false;
 }