const ERROR_MESSAGES = {
  INVALID_DATE_FORMAT: 'Invalid date format! follow this format YYYY-MM-DD',
  INVALID_GENDER_FORMAT: 'Invalid format! male or female ',
};

const validator = (post) => {
  let resp;
  if (post.errors) {
    resp = document.getElementById('d-o-b');
    resp.style.color = '#F00';
    if (post.errors.birth_date) {
      resp.innerHTML = ERROR_MESSAGES.INVALID_DATE_FORMAT;
    }
    if (post.errors.gender) {
      resp = document.getElementById('gender-error');
      resp.style.color = '#F00';
      resp.innerHTML = ERROR_MESSAGES.INVALID_GENDER_FORMAT;
    }
  }
};

export default validator;
