import { showPreloader, hidePreloader } from '../chat-control/toggle-preloader';
import addMessage from './add-message';
import iterationMessage from './iteration-message';
import { addToQueue, removeFromQueue } from '../chat-control/';
import { editUnreadQueue } from '../chat-control';



export default function botWrite(params, delay, duration) {

    if(params.botMessages.length){
        
        params.botWrite = true;
        
        const timer = setTimeout( async () => {

            const { message, realDuration, botMsgClass } = botStartWrite( params, duration );

            await setTimeout( showPreloader, 0 );
            await setTimeout( () => { botIsWriting( params, message, botMsgClass ) }, realDuration );
            await setTimeout( () => { botFinishWrite( params, message ) }, realDuration);
         }, delay ); 

         params.timer = timer;
    }
 }

 function botStartWrite(params, duration) {

    const message = iterationMessage(params);
    addToQueue(params, message);
    const realDuration = duration || message.length * 150;

     return {
        message, 
        realDuration,
        botMsgClass: 'msg_wrap'
     }

 }

function botIsWriting( params, message, botMsgClass ){
   addMessage( message, botMsgClass )
   console.log(params)
   if( params.isOpen ) editUnreadQueue(params);
   else editUnreadQueue(params, message);
      
}

 function botFinishWrite(params, message) {
    hidePreloader();
    params.botWrite = false;
    removeFromQueue(params, message);
    params.botWrite = false;
 }