export default function showWelcome(message) {
    const welcomeMessage = document.querySelector('.ramabot__header_message');
    const paragraph = welcomeMessage.querySelector('p');
    paragraph.textContent = message

    welcomeMessage.classList.add('open');
    setTimeout( () => {
        welcomeMessage.classList.remove('open');
    }, 3000 )
}