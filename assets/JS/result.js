//js result

const votiPositivi = localStorage.getItem("risposteGiuste");
const votiTotali = localStorage.getItem("risposteTotali");
const mediaTotale = localStorage.getItem("media");
const votiNegativi = votiTotali - votiPositivi;
const percentualePositiva = mediaTotale;
const percentualeNegativa = 100 - mediaTotale;

document.getElementById(
  "percentualeCorretta"
).innerHTML = `${percentualePositiva}%`;

document.getElementById(
  "percentualeNegativa"
).innerHTML = `${percentualeNegativa}%`;

document.getElementById("correctAnswerSpan").innerHTML = `${votiPositivi}/10`;

document.getElementById("wrongAnswerSpan").innerHTML = `${votiNegativi}/10`;

if (mediaTotale > 60) {
  document.getElementById("percBorder").innerHTML =
    "congratulation! you passed the exam we'll sent you the certificate in few minutes. Check your email (including promotions/spam folder)";
} else {
  document.getElementById("percBorder").innerHTML = "bocciato";
  ("Unfortunately, you didn't pass the exam. we'll sent you the certificate in few minutes. Check your email (including promotions/spam folder)");
}

const circle = document.getElementById("percContainer");
const percent = document.getElementById("percBorder");
