const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting to action_page.php

  // Get form inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const remember = document.getElementById('remember').checked;
  const profile_photo = document.getElementById('profile_photo').files[0];

  //Validate form inputs
  if (!email || !password) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = 'Please enter a valid email and password';
    return;
  }

  //Upload profile photo if provided
  if (profile_photo) {
    //upload profile photo logic
  }

  //Submit form and redirect to login page
  submitForm(email, password, remember); //submit form to server
});

function submitForm(email, password, remember) {
  fetch('/SignUpPage', {
    method: 'POST',
    body: JSON.stringify({ email, password, remember }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        window.location.href = '/Login page/Login.html';
      } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerHTML = data.message;
      }
    })
    .catch((error) => {
      ``;
      console.log(error);
    });
}
