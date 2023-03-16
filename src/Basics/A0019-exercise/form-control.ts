import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const hideErrorMessages = (form: HTMLFormElement): void => {
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach((formField) => {
    formField.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

const showErrorMessage = (input: HTMLInputElement, message: string): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;

  errorMessage.innerText = message;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

const checkHasEmptyFields = (...inputs: HTMLInputElement[]): boolean => {
  const inputsChecked = inputs.map((input) => {
    if (!input.value || input.value === '') {
      showErrorMessage(input, 'Esse campo é obrigatório!');
      return false
    }

    return true;
  });

  return inputsChecked.every((input) => input);
}

const checkEmailIsValid = (input: HTMLInputElement): boolean => {
  if (input.value && !isEmail(input.value)) {
    showErrorMessage(input, 'Email inválido!');
    return false;
  }

  return true;
}

const checkIfPasswordsEquals = (...passwordInputs: HTMLInputElement[]): boolean => {
  if (passwordInputs.some(({ value }) => value && value !== passwordInputs[0].value)) {
    passwordInputs.forEach((input) => {
      showErrorMessage(input, 'As senhas não coincidem!');
    });

    return false;
  }

  return true;
}

const handleSubmitForm = (event: Event) => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  hideErrorMessages(form);

  const hasErrors = [
    checkHasEmptyFields(username, email, password, password2),
    checkEmailIsValid(email),
    checkIfPasswordsEquals(password, password2),
  ];

  if (hasErrors.some((hasError) => !hasError)) {
    console.log('Preencha os campos corretamente!');
    return;
  }

  console.log('Formulário enviado com sucesso!');
};

form.addEventListener('submit', handleSubmitForm);
