export default function sendData(params) {
    let dataStr = '';

    params.log.forEach( ({ msg }) => {
        dataStr += `${msg}\n`;
    } );

    fetch(params.handlerUrl, {
        method: 'POST',
        header: {
            // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Content-Type': 'text/plain;charset=utf-8'
        },
        body: dataStr
    })
}
