import { getBotCookie, setBotCookie, createLogItem } from '../functions';

function writeLogCookie(message, className){
    const cookie = getBotCookie();
    const log = cookie.log || [];
    let coincidence;

    if( className === 'msg_wrap'){
        coincidence =  log.some( el => el.msg === message );
        if( coincidence ) return;
    }
    log.push( createLogItem( message, className ) );
    cookie.log = log;
    setBotCookie( cookie );
}

function createMessage(message, className = '') {

    const msgWrap = document.createElement('div');
    msgWrap.className = className;

    msgWrap.textContent = message;

    const msgCorner = document.createElement('div');
    msgCorner.className = 'msg_wrap_corner';

    msgWrap.appendChild(msgCorner);

    return msgWrap;
}

export default function addMessage( message, className, writeLog = true) {
    try{
        const ramabotBody = document.querySelector('.ramabot__body');
        const elem = createMessage( message, className );

        if ( writeLog ) writeLogCookie( message, className );

        ramabotBody.appendChild(elem);

    }catch (e){
        console.error('Ошибка при вставке сообщения: ', e);
    }
}