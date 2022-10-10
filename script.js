const reg_name = '^[a-z0-9]+$'; //^[a-z0-9]+$/i
const reg_pass = '^\\d+$';
const login_btn = document.querySelector('.login_btn');
const form_reg = document.querySelector('.login_form');
const span = document.querySelector('.span');


function FormValid() {
    const input = form_reg.querySelectorAll('input');
    let i = 0;
    input.forEach(elem => {
    if (elem.hasAttribute('name') && !elem.checkValidity()) {i++} });
    console.log(i);
    if (i == 0) { return true }
};

login_btn.onclick = function (event) {
    event.preventDefault();//отключить презагрузку
    if (FormValid()) {
        console.log('Форма заполнена правильно');
        span.innerHTML = '';
        span.classList.remove('span_trans');
    }
    else {
        span.innerHTML = '<p>Проверьте введеные данные!</p>';
        span.classList.add('span_trans');
    }
}

/*******ОТСЛЕЖИВАНИЕ ВВОДА***********************************************/
form_reg.addEventListener('input', InputHandler);
function InputHandler({target}) {
    if (target.hasAttribute('name')) {
        ValidCheck(target);
    }
}
//проверка на валидность
function ValidCheck(elem) {
    let attr = elem.getAttribute('name');
    if (attr == 'user_name') {
        elem.setAttribute('pattern', reg_name);
    }
    if (attr == 'user_pass') {
        elem.setAttribute('pattern', reg_pass);
    }
}
/************************************************************************/
/********************************ОТСЛЕЖИВАНИЕ ФОКУСРОВКИ*****************/
form_reg.addEventListener('focusin', InputFocus);
function InputFocus({target}) {
    if (target.hasAttribute('name')) {
        ShowMessage(target);
        span.innerHTML = '';
        span.classList.remove('span_trans');
    }
}

function ShowMessage(elem) {
    let attr = elem.getAttribute('name');
    if (attr == 'user_name') {
        elem.nextElementSibling.setAttribute('data-title', 'Только английские буквы и цифры без пробелов!');
    }
    if (attr == 'user_pass') {
        elem.nextElementSibling.setAttribute('data-title', 'Только цифры без пробелов!');
    }
}