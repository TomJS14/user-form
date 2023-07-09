//input elements
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const postcodeInput = document.querySelector("#postcode");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const submit = document.querySelector(".submit");

//error elements
const emailError = document.querySelector(".email");
const userNameError = document.querySelector(".username");
const postCodeError = document.querySelector(".postcode");
const passwordError = document.querySelector(".password");
const confirmError = document.querySelector(".confirm");

//Submit disabled by default
submit.disabled = true;

//check all inputs valid before enabling submit

function checkSubmit() {
  if (!confirmPasswordInput.value == null);
  {
    if (
      emailInput.validity.valid &&
      userNameInput.validity.valid &&
      postcodeInput.validity.valid &&
      passwordInput.validity.valid &&
      confirmPasswordInput.validity.valid
    ) {
      submit.disabled = false;
    }
  }
}

/* Error handling */
function showError() {
  if (!emailInput.validity.valid) {
    emailError.textContent = "Please enter a valid email";
  }
  if (!userNameInput.validity.valid) {
    userNameError.textContent = "Too few characters";
  }
  if (!postcodeInput.validity.valid) {
    postCodeError.textContent = "Enter a valid postcode";
  }
  if (!passwordInput.validity.valid) {
    passwordError.textContent =
      "Please enter a password longer than 5 characters";
  }
}

/* Event listeners */
emailInput.addEventListener("keyup", (e) => {
  if (emailInput.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
    checkSubmit();
  } else {
    showError();
  }
});

userNameInput.addEventListener("keyup", (e) => {
  if (!userNameInput.validity.tooShort) {
    userNameError.textContent = "";
    userNameError.className = "error";
    checkSubmit();
  } else {
    showError();
  }
});

postcodeInput.addEventListener("keyup", (e) => {
  let i = postcodeInput.value.length;
  if (postcodeInput.validity.valid) {
    postCodeError.textContent = "";
    postCodeError.className = "error";
    checkSubmit();
  } else {
    submit.disabled = true;
    showError();
  }
});

passwordInput.addEventListener("keyup", (e) => {
  if (passwordInput.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
    checkSubmit();
  } else {
    showError();
  }
});

confirmPasswordInput.addEventListener("keyup", passwordCheck);
passwordInput.addEventListener("keyup", passwordCheck);

function passwordCheck() {
  if (confirmPasswordInput.value === passwordInput.value) {
    confirmPasswordInput.setAttribute("style", "border: 2px solid green");
    confirmError.textContent = "";
    checkSubmit();
  } else {
    confirmPasswordInput.setAttribute("style", "border: 2px solid red");
    confirmError.setAttribute("style", "color: white");
    confirmError.textContent = "Passwords do not match";
    submit.disabled = true;
  }
}
