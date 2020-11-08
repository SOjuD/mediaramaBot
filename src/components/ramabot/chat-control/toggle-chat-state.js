export default function (params) {
    
    const form = document.querySelector('#ramabot');
    const textareas = form.querySelectorAll('textarea');
    const inputs = form.querySelectorAll('input');

    textareas.forEach( el => { el.classList.remove('input_height') });
    
    switch ( params.botMessages.length ){
        case 2: 

            textareas.forEach( el => { el.classList.add('d-none') });
            form.querySelector('[name = "name"]').classList.remove('d-none');
            break;

        case 1: 

            textareas.forEach( el => { el.classList.add('d-none') });
            inputs.forEach( el => { el.classList.add('d-none') });
            form.querySelector('[name = "phone"]').classList.remove('d-none');
            break;
            
            case 0: 
            
            textareas.forEach( el => { el.classList.add('d-none') });
            inputs.forEach( el => { el.classList.add('d-none') });
            break;

        default :

            inputs.forEach( el => { el.classList.add('d-none') });
            form.querySelector('[name = "question"]').classList.remove('d-none');

    }
}