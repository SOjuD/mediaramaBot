import { sendForm } from '../send-form';
import { setCurrentMessage } from '../user-write';
import { toggleChat, restoreDiscussion, startDiscussion, toggleInput } from '../chat-control';

export default function createChat(params){

    const { view: {   
                    name, 
                    photo,
                    color
                } 
            } = params;

    const chat = document.createElement('form');
    chat.className = 'ramabot';
    chat.id = 'ramabot';
    chat.innerHTML = `
        <div class="ramabot__header" style="background: ${color}">
            <div class="ramabot__header_img"><img id="img1" src="${photo}" alt="img"></div>
            <div class="ramabot__header_title">
                <h6>${name}</h6>
                <p> Буду рад помочь!</p>
            </div>
        </div>
        <div class="ramabot__body_box ramabot__body_hidden" style="border-color: ${color}">
            <div class="ramabot__body">
                <div class="write_wrap d-none" id="ramabot_prealoader"><img src="../assets/img/827.svg" alt="preloader">
                    <p>Подождите, вам пишут сообщение</p>
                </div>
            </div>
            <div class="ramabot__body_form" style="border-color: ${color}">   
                <textarea name="question" placeholder="Введите ваше сообщение"></textarea>
                <input class="d-none" type="text" name="name" placeholder="Введите ваше имя">
                <input class="d-none" type="tel" name="phone" placeholder="Введите ваш номер телефона">
                <button id="rama_send">
                    <svg id="send" viewBox="0 0 455 455" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: ${color}">
                    <path d="M227.5 0C101.855 0 0 101.855 0 227.5C0 353.145 101.855 455 227.5 455C353.145 455 455 353.145 455 227.5C455 101.855 353.145 0 227.5 0ZM199.476 355.589L178.228 334.411L284.791 227.5L178.228 120.589L199.476 99.411L327.148 227.5L199.476 355.589Z"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="ramabot__footer" style="background: ${color}"></div>`;

    document.querySelector('body').appendChild(chat);

    const ramabotHeader = chat.querySelector('.ramabot__header');
    ramabotHeader.addEventListener("click", () => { toggleChat(params); });
    chat.addEventListener("submit", (evt) => { sendForm(evt, params) });
    chat.addEventListener("input", (evt) => { setCurrentMessage(params, evt) });

    if (params.log.length) restoreDiscussion(params);
    else startDiscussion(params);

    toggleInput(params);

}