import { botWrite } from '../bot-write';

export default function startDiscussion(params) {
    botWrite( params, 2000 );
    botWrite( params, 8000 );
}
