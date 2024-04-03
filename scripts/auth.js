const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

const email = document.querySelector('#email');
const nickName = document.querySelector('#nickname');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');


const isEmpty = (input) => !input;
const isValidEmail = (email) => emailPattern.test(email);
const isValidPassword = (password) => password.length >= 8;
const isValidPasswordCheck = (password, passwordCheck) => password === passwordCheck;


const showWarning = (input, message) => {
    const warning = input.nextElementSibling;

    input.classList.add('warning');
    warning.textContent = message;
    warning.classList.remove('hidden');
}

const hideWarning = (input) => {
    const warning = input.nextElementSibling;

    input.classList.remove('warning');
    warning.classList.add('hidden');
}


const checkEmailValid = (event) => {
    const email = event.target;

    if (isEmpty(email.value))
        showWarning(email, '이메일을 입력해주세요.');
    else if (!isValidEmail(email.value))
        showWarning(email, '잘못된 이메일 형식입니다.');
    else
        hideWarning(email);
}

const checkNickNameValid = (event) => {
    const nickName = event.target;

    if (isEmpty(nickName.value))
        showWarning(nickName, '닉네임을 입력해주세요.');
    else
        hideWarning(nickName);
}

const checkPasswordValid = (event) => {
    const password = event.target;

    if (isEmpty(password.value))
        showWarning(password, '비밀번호를 입력해주세요.');
    else if (!isValidPassword(password.value))
        showWarning(password, '비밀번호를 8자 이상 입력해주세요.');
    else
        hideWarning(password);
}

const checkPasswordCheckValid = (event) => {
    const passworCheck = event.target;

    if (!isValidPasswordCheck(password.value, passwordCheck.value))
        showWarning(passworCheck, '비밀번호가 일치하지 않습니다.');
    else
        hideWarning(passworCheck);
}


email.addEventListener('focusout', checkEmailValid);
nickName && nickName.addEventListener('focusout', checkNickNameValid);
password.addEventListener('focusout', checkPasswordValid);
passwordCheck && passwordCheck.addEventListener('focusout', checkPasswordCheckValid);