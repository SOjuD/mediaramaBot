function addToQueue (params, message){
    params.messagesQueue.push(message);
}

function removeFromQueue (params, message){
    const index = params.messagesQueue.indexOf(message);
    params.messagesQueue.splice(index, 1);
}

export {
    addToQueue,
    removeFromQueue
}