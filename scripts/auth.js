const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

const email = document.querySelector('#email');
const nickName = document.querySelector('#nickname');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');

const formButton = document.querySelector('form .button');
const loginButton = document.querySelector('#login-form .button');
const signupButton = document.querySelector('#singup-form .button');


const isEmpty = (input) => !input;
const isValidEmail = (email) => emailPattern.test(email);
const isValidPassword = (password) => password.length >= 8;
const isValidPasswordCheck = (password, passwordCheck) => password === passwordCheck;
const isAllVaild = () => {
    const inputs = Array.from(document.querySelectorAll('.input'));

    return inputs.filter((input) => !input.value || input.classList.contains('warning')).length === 0;
}


const showWarning = (input, message) => {
    const warning = input.nextElementSibling;

    input.classList.add('warning');
    warning.textContent = message;
    warning.classList.remove('hidden');
    formButton.disabled = true;
}

const hideWarning = (input) => {
    const warning = input.nextElementSibling;

    input.classList.remove('warning');
    warning.classList.add('hidden');

    if (isAllVaild()) formButton.disabled = false;
}


const checkEmailValid = () => {
    if (isEmpty(email.value))
        showWarning(email, '이메일을 입력해주세요.');
    else if (!isValidEmail(email.value))
        showWarning(email, '잘못된 이메일 형식입니다.');
    else
        formButton.disabled && hideWarning(email);
}

const checkNickNameValid = () => {
    if (isEmpty(nickName.value))
        showWarning(nickName, '닉네임을 입력해주세요.');
    else
        formButton.disabled && hideWarning(nickName);
}

const checkPasswordValid = () => {
    if (isEmpty(password.value))
        showWarning(password, '비밀번호를 입력해주세요.');
    else if (!isValidPassword(password.value))
        showWarning(password, '비밀번호를 8자 이상 입력해주세요.');
    else
        formButton.disabled && hideWarning(password);

    passwordCheck && passwordCheck.value && checkPasswordCheckValid();
}

const checkPasswordCheckValid = () => {
    if (!isValidPasswordCheck(password.value, passwordCheck.value))
        showWarning(passwordCheck, '비밀번호가 일치하지 않습니다.');
    else
        formButton.disabled && hideWarning(passwordCheck);
}


const submitAndMove = (event, path) => {
    // Do something for submit the data

    window.location.href = path;
}

formButton.disabled = true;
email.addEventListener('focusout', checkEmailValid);
nickName && nickName.addEventListener('focusout', checkNickNameValid);
password.addEventListener('focusout', checkPasswordValid);
passwordCheck && passwordCheck.addEventListener('focusout', checkPasswordCheckValid);

loginButton && loginButton.addEventListener('click', (event) => submitAndMove(event, '/items'));
signupButton && signupButton.addEventListener('click', (event) => submitAndMove(event, '/login'));
