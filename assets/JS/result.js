// prendi i dati
const votiPositivi = localStorage.getItem("risposteGiuste");
const votiTotali = localStorage.getItem("risposteTotali");
const mediaTotale = localStorage.getItem("media");
const votiNegativi = votiTotali - votiPositivi;
const percentualePositiva = mediaTotale;
const percentualeNegativa = 100 - mediaTotale;

// inserisci le percentuali nelle valutazioni
document.getElementById("percentualeCorretta").innerHTML = `${percentualePositiva}%`;
document.getElementById("percentualeNegativa").innerHTML = `${percentualeNegativa}%`;

// inserisci i voti nelle valutazioni
document.getElementById("correctAnswerSpan").innerHTML = `${votiPositivi}/10`;
document.getElementById("wrongAnswerSpan").innerHTML = `${votiNegativi}/10`;

// vedere se sei primosso o bocciato
if (mediaTotale > 60) {
  document.getElementById("percBorder").innerHTML = `
    <span class="bold">congratulation!</span> 
    <br>
    <span class="color">you passed the exam</span> 
    <br>
    <span class="lighter">we'll sent you the certificate in few minutes. Check your email (including promotions/spam folder)</span>`;
} else {
  document.getElementById("percBorder").innerHTML = `
  <span class="bold">Unfortunately</span>
  <br>
  <span class="color">you didn't pass the exam.</span>
  <br>
  <span class="lighter">we'll sent you the certificate in few minutes. Check your email (including promotions/spam folder)</span>`;
}

// riempi il cerchio dinamicamente
const circle = document.getElementById("percContainer");
const sliceAngle = percentualePositiva * 3.6;
