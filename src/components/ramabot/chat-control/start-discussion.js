import { botWrite } from '../bot-write';

export default function startDiscussion(params) {
    botWrite( params, 1000 );
    botWrite( params, 7000 );
}
