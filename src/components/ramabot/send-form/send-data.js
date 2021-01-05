import { getBotCookie } from '../functions';


export default function sendData(params) {
    let conversation = '';
    getBotCookie().log.forEach( ({ msg }) => {
        conversation += `- ${msg}\n`;
    } );

    fetch(params.handlerUrl, {
        method: 'POST',
        headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({conversation})
    })
    .then(async(res) => {
        console.log(await res.text())
    })
}
