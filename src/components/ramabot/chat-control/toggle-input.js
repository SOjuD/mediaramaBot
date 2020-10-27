export default function (params) {
    const form = document.querySelector('#ramabot');
    
    switch ( params.botMessages.length ){
        case 1: 

            form.querySelectorAll('textarea').forEach( el => {
                el.classList.add('d-none');
            });
            form.querySelector('[name = "name"]').classList.remove('d-none');
            break;

        case 0: 

            form.querySelectorAll('textarea').forEach( el => {
                el.classList.add('d-none');
            });
            form.querySelectorAll('input').forEach( el => {
                el.classList.add('d-none');
            });
            form.querySelector('[name = "phone"]').classList.remove('d-none');
            break;

        default :

            form.querySelectorAll('input').forEach( el => {
                el.classList.add('d-none');
            });
            form.querySelector('[name = "question"]').classList.remove('d-none');

    }
}