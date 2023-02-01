let firebaseConfig = {
  apiKey: 'AIzaSyB6PhXCLJyhcrQpCE1j2LeiDNktRMqWBdg',
  authDomain: 'Famous-phalanx-338605.firebaseapp.com',
  databaseURL: 'https://famous-phalanx-338605.firebaseio.com',
  projectId: 'famous-phalanx-338605',
  storageBucket: 'famous-phalanx-338605.appspot.com',
  messagingSenderId: '116030627977',
  appId: '1:116030627977:web:9a8d296b80b9cec1e26658',
};

let form = document.getElementById('signup-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  let name = nameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;

  if (!name) {
    alert('Please enter your name');
    return;
  }
  if (!email) {
    alert('Please enter your email');
    return;
  }
  if (!password) {
    alert('Please enter a password');
    return;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  try {
    let response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    let data = await response.json();
    if (data.error) {
      alert(data.error.message);
      return;
    }
    //sending a PUT request to a Firebase REST API endpoint to update the data of a user with the given userId. The data being sent in the request body includes the name and email fields, and it is stringified in JSON format.
    let userId = data.localId;
    await fetch(
      `https://famous-phalanx-338605.firebaseio.com/users/${userId}.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      }
    );
  } catch (error) {
    console.error(error);
    alert('An error occurred while signing up. Please try again later.');
  }
  window.location.href = './Login page/Login.html';
});
