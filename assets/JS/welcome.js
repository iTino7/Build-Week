document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("promise");
  const proceedButton = document.querySelector(".button");

  proceedButton.addEventListener("click", function (event) {
    if (!checkbox.checked) {
      event.preventDefault();
      alert("Accetta i termini e le condizioni per procedere.");
    }
  });
});
