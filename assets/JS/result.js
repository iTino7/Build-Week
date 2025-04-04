// prendi i dati
const votiPositivi = localStorage.getItem("risposteGiuste");
const votiTotali = localStorage.getItem("risposteTotali");
const mediaTotale = localStorage.getItem("media");
const votiNegativi = localStorage.getItem("risposteSbagliate");
const ArrayGiuste = localStorage.getItem("risposteGiusteStr").split(",");
const ArraySbagliate = localStorage.getItem("risposteSbagliateStr").split(",");
const rispTotali = localStorage.getItem("risposteTotaliArr").split(",");
const domTotali = localStorage.getItem("domande").split(",");

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

  const domandeRisposte = rispTotali.map((risposta, index) => {
    return {
      domande: domTotali[index],
      risposta: risposta,
      esito: ArrayGiuste.includes(`${index + 1}`) ? "corretto" : "sbagliato",
    };
  });

  domandeRisposte.forEach((item) => {
    // Crea una nuova riga
    const rispostaRow = document.createElement("tr");

    // Crea la cella delle domande
    const domandaCell = document.createElement("td");
    domandaCell.textContent = item.domande;
    rispostaRow.appendChild(domandaCell);

    // Crea la cella delle risposte
    const rispostaCell = document.createElement("td");
    rispostaCell.textContent = item.risposta;
    rispostaRow.appendChild(rispostaCell);

    // Crea la cella dell'esito
    const esitoCell = document.createElement("td");
    esitoCell.innerHTML = item.esito === "corretto" ? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>';
    rispostaRow.appendChild(esitoCell);

    // Aggiungi la riga alla tabella
    table.appendChild(rispostaRow);
  });
});
