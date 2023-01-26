// Get the form elements
const form = document.querySelector('form');
const usernameInput = document.querySelector("input[name='uname']");
const passwordInput = document.querySelector("input[name='psw']");

// Listen for the form to be submitted
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validate the input
  if (!username || !password) {
    alert('Please enter a username and password.');
    return;
  }

  // Send a request to the server to check the login credentials
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Login successful, redirect the user to the dashboard
        window.location.href = '/dashboard ';
      } else {
        // Login failed, show an error message
        alert('Invalid username or password.');
      }
    })
    .catch((error) => {
      console.error(error);
      alert(
        'An error occurred while trying to log in. Please try again later.'
      );
    });
});
