const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Not a valid email");
  } else if (email.validity.tooShort) {
    email.setCustomValidity("Email must be a minimum of 10 characters");
  } else {
    email.setCustomValidity("");
  }
});
