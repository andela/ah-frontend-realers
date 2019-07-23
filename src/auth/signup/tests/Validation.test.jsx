import validation, { ERROR_MESSAGES } from '../Validation';

describe('validaion', () => {
  it('should return an Invalid email error message', () => {
    const actual = validation('email', 'jnkdsnk.com');
    expect(actual).toBe(ERROR_MESSAGES.INVALID_EMAIL);
  });
  it('should return an empty string if email is valid', () => {
    const actual = validation('email', 'emmanuelisabirye9@gmail.com');
    expect(actual).toBe('');
  });
  it('should return an invalid password error message if password length is less than 8', () => {
    const actual = validation('password', 'er43');
    expect(actual).toBe(ERROR_MESSAGES.INVALID_PASSWORD_LENGTH);
  });
  it('should return an invalid password error message if password length is greater than 8 characters but not alphanumeric', () => {
    const actual = validation('password', 'erttttttttttttttt');
    expect(actual).toBe(ERROR_MESSAGES.INVALID_PASSWORD_ALPHA_NUM);
  });
  it('should return an empty string by default', () => {
    const actual = validation('uiuhih');
    expect(actual).toBe('');
  });
});