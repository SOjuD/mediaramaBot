import { createChat } from './chat-control';
import { getBotCookie, getParams, addMask } from './functions';


const pathToParams = 'params.json';

getParams(pathToParams).then( ramaParams => {
    ramaParams.log = getBotCookie().log || [];
    createChat(ramaParams);
    addMask();
});



