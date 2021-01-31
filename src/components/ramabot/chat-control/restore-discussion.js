import { addMessage } from '../bot-write';
import { getBotCookie } from '../functions';

export default function restoreDiscussion({ botMessages }) {


    getBotCookie().log.forEach( ({ msg, from }) => {
        addMessage(msg, from, false);

        if( from === 'msg_wrap' ){
            botMessages.forEach( (el, indx, arr) => {
                if( el === msg){
                    arr.splice(indx, 1);
                    return;
                }
            })
        }
    })
}