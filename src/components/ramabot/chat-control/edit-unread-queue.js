export default function editUnreadQueue(params, message){
    if(message) params.unreadMessages.push(message);
    else params.unreadMessages = [];
}