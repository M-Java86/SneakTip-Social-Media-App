//Get the form element
const form = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="psw"]');
const errorMessage = document.querySelector('.error-message');

//Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // reset error message
  errorMessage.textContent = '';
  // check for empty fields
  if (!emailInput.value || !passwordInput.value) {
    errorMessage.textContent = 'Please fill in all fields';
    return;
  }
  // check for invalid email format
  if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    errorMessage.textContent = 'Please enter a valid email';
    return;
  }
  const formData = new FormData(form);
  fetch('SignUp', {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.status === 200) {
      // redirect the page to login.html
      window.location.href = '/dashboard ';
      } else {
        // Login failed, show an error message
        alert('Invalid username or password.');
      }
    }) 
      
  
