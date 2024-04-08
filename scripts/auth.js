const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const MIN_PASSWORD_LENGTH = 8;

const email = document.querySelector('#email');
const nickName = document.querySelector('#nickname');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');

const seeOrNotIcons = document.querySelectorAll('.see-or-not-icon');

const formButton = document.querySelector('form .button');
const loginButton = document.querySelector('#login-form .button');
const signupButton = document.querySelector('#signup-form .button');


const isEmpty = (input) => !input;
const isValidEmail = (email) => EMAIL_PATTERN.test(email);
const isValidPassword = (password) => password.length >= MIN_PASSWORD_LENGTH;
const isValidPasswordCheck = (password, passwordCheck) => password === passwordCheck;
const isValidAll = () => {
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

  if (isValidAll()) {
    formButton.disabled = false;
  }
}


const checkEmailValid = () => {
  if (isEmpty(email.value)) {
    showWarning(email, '이메일을 입력해주세요.');
  } else if (!isValidEmail(email.value)) {
    showWarning(email, '잘못된 이메일 형식입니다.');
  } else if (formButton.disabled) {
    hideWarning(email);
  }
}

const checkNickNameValid = () => {
  if (isEmpty(nickName.value)) {
    showWarning(nickName, '닉네임을 입력해주세요.');
  } else if (formButton.disabled) {
    hideWarning(nickName);
  }
}

const checkPasswordValid = () => {
  if (isEmpty(password.value)) {
    showWarning(password, '비밀번호를 입력해주세요.');
  } else if (!isValidPassword(password.value)) {
    showWarning(password, '비밀번호를 8자 이상 입력해주세요.');
  } else if (formButton.disabled) {
    hideWarning(password);
  }

  passwordCheck && passwordCheck.value && checkPasswordCheckValid();
}

const checkPasswordCheckValid = () => {
  if (!isValidPasswordCheck(password.value, passwordCheck.value)) {
    showWarning(passwordCheck, '비밀번호가 일치하지 않습니다.');
  } else if (formButton.disabled) {
    hideWarning(passwordCheck);
  }
}


const toggleInvisible = (event) => {
  const icon = event.target;
  const input = icon.parentElement.firstElementChild;

  if (icon.classList.contains('invisible')) {
    icon.src = '/images/icon/eye-visible.svg';
    input.type = 'text';
  } else {
    icon.src = '/images/icon/eye-invisible.svg';
    input.type = 'password';
  }

  icon.classList.toggle('invisible');
}


const handleSubmit = (event, path) => {
  // Do something for submit the data

  window.location.href = path;
}


email.addEventListener('focusout', checkEmailValid);
nickName && nickName.addEventListener('focusout', checkNickNameValid);
password.addEventListener('focusout', checkPasswordValid);
passwordCheck && passwordCheck.addEventListener('focusout', checkPasswordCheckValid);

seeOrNotIcons.forEach((icon) => icon.addEventListener('click', toggleInvisible));

loginButton && loginButton.addEventListener('click', (event) => handleSubmit(event, '/items'));
signupButton && signupButton.addEventListener('click', (event) => handleSubmit(event, '/login'));
