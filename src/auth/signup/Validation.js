export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Invalid Email',
  INVALID_PASSWORD_LENGTH: 'Password should contain atleast 8 characters',
  INVALID_PASSWORD_ALPHA_NUM: 'Password should only contain letters and numbers',
};

const validateEmail = {
  EMAIL_UTILS: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
};

const validatePassword = {
  PASSWORD_UTILS: /^[a-zA-Z]+[0-9]/,
};

const validation = (field, value) => {
  let result = '';
  switch (field) {
    case 'email':
      if (!value.match(validateEmail.EMAIL_UTILS)) {
        result = ERROR_MESSAGES.INVALID_EMAIL;
      }
      break;
    case 'password':
      if (value.length < 8) {
        result = ERROR_MESSAGES.INVALID_PASSWORD_LENGTH;
      } if (!value.match(validatePassword.PASSWORD_UTILS)) {
        result = ERROR_MESSAGES.INVALID_PASSWORD_ALPHA_NUM;
      }
      break;
    default:
      result = '';
  }
  return result;
};

export default validation;
