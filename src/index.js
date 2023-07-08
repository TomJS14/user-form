//input elements
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const postcodeInput = document.querySelector("#postcode");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");

const submit = document.querySelector(".submit");

//error elements
const emailError = document.querySelector(".email-error");
const userNameError = document.querySelector(".username-error");
const postCodeError = document.querySelector(".postcode-error");
const passwordError = document.querySelector(".password-error");
const confirmError = document.querySelector(".confirm-error");

/* Error handling */
function showError() {
  if (!emailInput.validity.valid) {
    emailError.textContent = "Please enter a valid email";
  }
  emailError.className = "error active";
  if (!userNameInput.validity.valid) {
    userNameError.textContent = "Too few characters";
  }
  userNameError.className = "error active";
  if (!postcodeInput.validity.valid) {
    postCodeError.textContent = "Enter a valid postcode";
  }
  postCodeError.className = "error active";
}

/* Event listeners */
emailInput.addEventListener("keyup", (e) => {
  if (emailInput.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

userNameInput.addEventListener("keyup", (e) => {
  console.log(userNameInput.validity.tooShort);
  if (!userNameInput.validity.tooShort) {
    userNameError.textContent = "";
    userNameError.className = "error";
  } else {
    showError();
  }
});

postcodeInput.addEventListener("keyup", (e) => {
  let i = postcodeInput.value.length;
  if (postcodeInput.validity.valid) {
    postCodeError.textContent = "";
    postCodeError.className = "error";
  } else if (i > 4) {
    showError();
  }
});

passwordInput.addEventListener("keyup", passwordCheck);
confirmPasswordInput.addEventListener("keyup", passwordCheck);

function passwordCheck() {
  if (confirmPasswordInput.value === passwordInput.value) {
    confirmPasswordInput.setAttribute("style", "background-color: green");
    confirmError.textContent = "";
    submit.disabled = false;
  } else {
    confirmPasswordInput.setAttribute("style", "background-color: red");
    confirmError.setAttribute("style", "color: white");
    confirmError.textContent = "Passwords do not match";

    submit.disabled = true;
  }
}
