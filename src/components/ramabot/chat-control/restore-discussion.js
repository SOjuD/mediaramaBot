import { addMessage } from '../bot-write';

export default function restoreDiscussion({ log, botMessages }) {


    log.forEach( ({ msg, from }) => {
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