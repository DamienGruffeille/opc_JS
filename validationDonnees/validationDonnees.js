document.getElementById("code").addEventListener("change", function (e) {
  if (isValid(e.target.value)) {
    document.getElementById("code-validation").innerText = "Code valide";
    document.getElementById("submit-btn").removeAttribute("disabled");
  } else {
    document.getElementById("code-validation").innerText = "Code invalide";
    document.getElementById("submit-btn").setAttribute("disabled", "true");
  }
});

function isValid(value) {
  return /^CODE-/.test(value);
}
