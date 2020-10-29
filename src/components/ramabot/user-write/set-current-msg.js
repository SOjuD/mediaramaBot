import getUsermsg from './get-user-msg';

function setCurrentInputName(params, name) {
    params.setCurrentInputName = name;
}

export default function setCurrentMessage(params, evt) {
    params.currentUserMessage = getUsermsg(evt);

    setCurrentInputName(params, evt.target.name);

    if(evt.target.nodeName === 'TEXTAREA'){
        if(evt.target.value.length > 10) evt.target.classList.add('input_height');
        else evt.target.classList.remove('input_height');
    }
}