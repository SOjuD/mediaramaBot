import { createChat } from './chat-control';
import { getBotCookie, getParams, addMask } from './functions';
import { sendData } from './send-form';

const id = window.location.search;
// const basePath = 'http://ramabot.dix.by/getparams.php';
const basePath = 'params.json';
const pathToParams = basePath + id;

getParams(pathToParams).then( ramaParams => {
    try{
        if( !ramaParams ) throw new Error('Данные пользователя не найдены');

        ramaParams.log = getBotCookie().log || [];
        createChat(ramaParams);
        addMask();
        sendData(ramaParams);
    }catch(e){
        console.log(e);
    }
});



