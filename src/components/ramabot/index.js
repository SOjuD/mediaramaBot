import { createChat } from './chat-control';
import { getBotCookie, getParams, addMask } from './functions';

const id = window.location.search;
const basePath = 'http://ramabot.dix.by/getparams.php';
const pathToParams = basePath + id;

getParams(pathToParams).then( ramaParams => {
    try{
        if( !ramaParams ) throw new Error('Данные пользователя не найдены');

        ramaParams.log = getBotCookie().log || [];
        createChat(ramaParams);
        addMask();
    }catch(e){
        console.log(e);
    }
});



