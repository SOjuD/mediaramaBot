import { createChat } from './chat-control';
import { getBotCookie, getParams, addMask } from './functions';

const pathToParams = 'params.json';
// const pathToParams = "http://ramabot.dix.by/getparams.php";

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



