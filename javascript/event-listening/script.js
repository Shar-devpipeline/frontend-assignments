const header = document.getElementById("header");
const inputField = document.getElementById("inputField");
const clearInput = document.getElementById("clearInput");
console.log(inputField);

inputField.addEventListener("input", function () {
  header.textContent = inputField.value;
});

inputField.addEventListener("input", function () {
  if (inputField.value.length >= 5) {
    inputField.disabled = true;
  }
});

clearInput.addEventListener("click", function () {
  inputField.value = "";
  inputField.disabled = false;
});
