import { loadingQueue } from '../user-write';

export default function sendForm(evt, params) {
    evt.preventDefault();
    loadingQueue(params, evt);    
}