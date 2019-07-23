
const helper = (post) => {
  if (post.errors) {
    let resp = document.getElementById('errors_username');
    resp.style.color = '#F00';
    if (post.errors.username) {
      resp.innerHTML = 'Username already exists!';
    }
    if (post.errors.email) {
      resp = document.getElementById('errors');
      resp.innerHTML = 'User with this email already exists!';
    }
  } else {
    const resp = document.getElementById('success');
    resp.style.color = 'green';
    resp.innerHTML = 'Successfully signedup! Please check your email and verify your account';
  }
};

export default helper;
