function showPreloader() {
    try{
        const preloader = document.querySelector('#ramabot_prealoader');
        preloader.classList.remove('d-none');
        preloader.scrollIntoView(false);
    } catch (e) {
        console.error(`Preloader is not fine: `, e)
    }
}

function hidePreloader() {
    try{
        const preloader = document.querySelector('#ramabot_prealoader');
        preloader.classList.add('d-none');
    } catch (e) {
        console.error('Preloader is not fine: ', e)
    }
}

export {
    showPreloader,
    hidePreloader
}