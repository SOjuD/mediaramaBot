export default function editUnreadQueue(params, message){
    const { unreadMessages } = params;
    const counter = document.querySelector('#ramabot-counter');
    
    if(message){
        unreadMessages.push(message);
        counter.classList.remove('d-none');
    }else {
        unreadMessages.length = 0;
        counter.classList.add('d-none');
    }
    counter.textContent = unreadMessages.length;


}