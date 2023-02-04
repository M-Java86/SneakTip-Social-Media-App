//Target Nodes//
const username = document.getElementById('username');
const password = document.getElementById('password');

//Firebase-for every api call we need to out a URL &endpoint
const USERS_URL =
  'https://famous-phalanx-338605-default-rtdb.firebaseio.com/users';
const POSTS_URL =
  'https://famous-phalanx-338605-default-rtdb.firebaseio.com/posts';
const EXT = '.json';

console.log(password, username);

const user = {
  username: 'michelle8639am',
  name: 'michelle',
};
//setting a variable validateUser that's taking in user, creating a new promise with(re-resolve & rej-reject)
const validateUser = (user) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(JSON.stringify({ user, status: 200, ok: true }));
    }, 2000);
  });
//fetch Api-provides interfaces for fetching resources.
const getUser = (user) => fetch(`${USERS_URL}/{user.username}${EXT}`);
