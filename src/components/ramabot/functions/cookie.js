function getBotCookie() {
    let cookie = document.cookie;
    cookie = cookie.split('; ');

    const ramaBotCookie = cookie.find( el => {
        if(el.indexOf('ramaBot=') >= 0) {
            return el;   
        }
    });

    
    if(ramaBotCookie){
        const result = ramaBotCookie.match(/\{.*\}/g);
        return JSON.parse( result );
    } 
    return {};
}
function setBotCookie(obj){
    //устанавливает cookie на 2 часа / 7200 секунд
    document.cookie = `ramaBot=${JSON.stringify(obj)}; max-age=7200`;
}

export {
    getBotCookie,
    setBotCookie
}