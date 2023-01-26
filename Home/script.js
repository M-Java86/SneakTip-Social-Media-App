const SignUpPage = document.getElementById('SignUp-page');
const SIGNUPBtn = document.querySelector('.SIGNUPBtn');

SIGN - UPBtn.addEventListener('click', gotoSignUpPage);
function gotoSignUpPage(e) {
  e.preventDefault();
  window.location.replace('/SignUpPage');
}
