//Targeting nodes
const username = document.getElementById('username');
const password = document.getElementById('password');

const USERS_URL =
  'https://famous-phalanx-338605-default-rtdb.firebaseio.com/users';
const POSTS_URL =
  'https://famous-phalanx-338605-default-rtdb.firebaseio.com/posts';
const EXT = '.json';

console.log(location);

const user = {
  username: 'michelle8639am',
  name: 'michelle',
};

const validateUser = (user) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(JSON.stringify({ user, status: 200, ok: true }));
    }, 2000);
  });

const getUser = (user) => fetch(`${USERS_URL}/${user.username}${EXT}`);
const postUser = (user) =>
  fetch(`${USERS_URL}${EXT}`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });

function browserValidation() {
  if (!password.value || password.value.length < 5) {
    return 'password failed';
  }
  return null;
}

const LoginBtn = document.getElementById('LoginBtn');
LoginBtn.addEventListener('click', handleLoginBtn);

async function handleLoginBtn(e) {
  e.preventDefault();
  e.stopPropagation();

  const user = {
    username: username.value,
    password: password.value,
  };
  try {
    const validationError = browserValidation();
    if (validationError) {
      throw Error(validationError);
    }
    const checkToSeeIfUserExistsInDatabase = await getUser(user);
    if (!checkToSeeIfUserExistsInDatabase.ok) {
      throw Error('Error validating the user');
    }
    const userInformationInDatabase =
      await checkToSeeIfUserExistsInDatabase.json();
    if (!userInformationInDatabase) {
      throw Error("Username Doesn't exist");
    }
    if (userInformationInDatabase) {
      localStorage.setItem(
        'userInfo',
        JSON.stringify(userInformationInDatabase)
      );
      window.location.href = 'dashboard.html';
    }
  } catch (error) {
    alert(error);
  }
}
