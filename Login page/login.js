const form = document.getElementById('login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'mowens@gmail.com' && password === 'mo1234') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid Email or Password. Please try again.');
  }
});
