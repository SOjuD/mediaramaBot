import { post } from "jquery";

export default function sendData(params) {
    fetch(params.handlerUrl, {
        method: post,
        header: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: JSON.stringify(params.log)
    })
}