import { showPreloader, hidePreloader } from './toggle-preloader';
import addMessage from './add-message';
import iterationMessage from './iteration-message';
import { addToQueue, removeFromQueue } from './edit-queue';



export default function botWrite(params, delay, duration) {

    if(params.botMessages.length){
        const message = iterationMessage(params);
        
        addToQueue(params, message);

        duration = duration || message.length * 150;
        console.log(duration)
        const botMsgClass = 'msg_wrap';

        const timer = setTimeout( async () => {
             await setTimeout( showPreloader, 0 );
             await setTimeout( () => { addMessage( message, botMsgClass ) }, duration );
             await setTimeout( () => {
                hidePreloader();
                params.botWrite = false;
                
                removeFromQueue(params, message);

             }, duration);
         }, delay ); 

         params.timer = timer;
    }
 }