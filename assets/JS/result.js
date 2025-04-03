// prendi i dati
const votiPositivi = localStorage.getItem("risposteGiuste");
const votiTotali = localStorage.getItem("risposteTotali");
const mediaTotale = localStorage.getItem("media");
const votiNegativi = localStorage.getItem("risposteSbagliate");
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
const circle = document.querySelector("#perc-svg circle");
const circonferenza = 251.2;
const svgColor = circonferenza * (1 - percentualePositiva / 100);
const svgColorWrong = circonferenza * (1 - percentualeNegativa / 100);

circle.setAttribute("stroke-dasharray", circonferenza);
circle.setAttribute("stroke-dashoffset", svgColor * -1);
circle.setAttribute("transform", "rotate (270 50 50)");
circle.style.transition = "stroke-dashoffset 1s ease-in-out";
circle.style.stroke = "#00ffff";

const circleWrong = document.querySelector("#perc-svg-wrong");
circleWrong.setAttribute("stroke-dasharray", circonferenza);
circleWrong.setAttribute("stroke-dashoffset", svgColorWrong);
circleWrong.setAttribute("transform", "rotate (270 50 50)");
circleWrong.style.transition = "stroke-dashoffset 1s ease-in-out";
circleWrong.style.stroke = "#C2128D";

// tabella con risposte corrette
document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector("table"); // Seleziona la tabella intera

  // Esempi di domande e risposte

  domandeRisposte.forEach((item) => {
    // Crea una nuova riga
    const domandaRow = document.createElement("tr");

    // Crea la cella della domanda
    const domandaCell = document.createElement("td");
    domandaCell.textContent = item.domanda;
    domandaRow.appendChild(domandaCell);

    // Crea la cella dell'esito
    const esitoCell = document.createElement("td");
    if (item.esito === "corretto") {
      esitoCell.textContent = "✅";
    } else {
      esitoCell.textContent = "❌";
    }
    domandaRow.appendChild(esitoCell);

    // Aggiungi la riga alla tabella
    table.appendChild(domandaRow);
  });
});
