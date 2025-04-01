const domande = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does the computer software acronym JVM stand for?",
      correct_answer: "Java Virtual Machine",
      incorrect_answers: ["Java Vendor Machine", "Java Visual Machine", "Just Virtual Machine"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does GHz stand for?",
      correct_answer: "Gigahertz",
      incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What programming language was GitHub written in?",
      correct_answer: "Ruby",
      incorrect_answers: ["JavaScript", "Python", "Lua"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "The Windows ME operating system was released in the year 2000.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "In any programming language, what is the most common way to iterate through an array?",
      correct_answer: "&#039;For&#039; loops",
      incorrect_answers: ["&#039;If&#039; Statements", "&#039;Do-while&#039; loops", "&#039;While&#039; loops"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "Ada Lovelace is often considered the first computer programmer.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "&quot;HTML&quot; stands for Hypertext Markup Language.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "How many values can a single byte represent?",
      correct_answer: "256",
      incorrect_answers: ["8", "1", "1024"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "Time on Computers is measured via the EPOX System.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
  ],
};

let index = 0; //inizializiamo l'indice per scorrere le domande a 0
let risposteGiuste = 0;
let risposteTotali = 0;
window.myApp = window.myApp || {};
window.myApp.media = 0;

// Funzione per gestire la selezione delle risposte
function selected(e) {
  document.querySelectorAll("button:not(.prosegui)").forEach((bottone) => {
    bottone.classList.remove("selected");
  });
  let bottone = e.target;
  bottone.classList.add("selected");
}

// Funzione per valutare la risposta corrente
function valutaRisposta() {
  const domanda = domande.results[index - 1]; // Usa index-1 perché index è già stato incrementato
  const bottoneSelezionato = document.querySelector("button.selected:not(.prosegui)");

  if (bottoneSelezionato) {
    if (bottoneSelezionato.innerText === domanda.correct_answer) {
      risposteGiuste += 1;
    }
    risposteTotali += 1;
    window.myApp.media = (risposteGiuste / risposteTotali) * 100;
    localStorage.setItem("media", window.myApp.media);
  }

  console.log(risposteGiuste);
}

function cambiaDomande() {
  if (index < domande.results.length) {
    let domanda = domande.results[index];
    // Aggiorna il contatore delle domande

    // Pulisce la box prima di aggiungere la nuova domanda
    document.querySelector(".box").innerHTML = "";
    document.querySelector(".button").innerHTML = "";

    //Creo le domande dinamicamente
    let myH1 = document.createElement("h1");
    myH1.innerText = domanda.question;
    document.querySelector(".box").appendChild(myH1);

    //Prendo le risposte e le mischio in modo che la risposta esatta sia sempre in una posizione diversa
    const risposte = [...domanda.incorrect_answers, domanda.correct_answer];
    risposte.sort(() => Math.random() - 0.5);

    //Creo i bottoni con le domande
    for (let i = 0; i < risposte.length; i++) {
      let btnAnswer = document.createElement("button");
      btnAnswer.innerText = risposte[i];
      document.getElementsByClassName("button")[0].appendChild(btnAnswer);

      // Aggiungi event listener a ogni bottone di risposta
      btnAnswer.addEventListener("click", selected);
    }

    let questionCounter = document.querySelector("p > span");
    questionCounter.textContent = `${index + 1}/${domande.results.length}`;
    index++;
  } else {
    window.open(`result.html`, `_self`);
  }
}

// Configura l'handler del pulsante prosegui una sola volta
document.querySelector(".prosegui").addEventListener("click", () => {
  if (index > 0) {
    // Se non è la prima domanda, valuta la risposta precedente
    valutaRisposta();
  }
  cambiaDomande();
});

// Avvia il quiz
cambiaDomande();

let countdown; // Variabile globale per il timer

function startTimer(duration) {
  let timeLeft = duration;
  let textElement = document.getElementById("timer-text");
  let animation = document.getElementById("timer-animation");

  clearInterval(countdown);
  animation.beginElement();

  countdown = setInterval(() => {
    textElement.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdown);
      cambiaDomande();
      startTimer(10);
    }
  }, 1000);
}

// Associa il timer ai bottoni senza avviarlo immediatamente
document.querySelectorAll(".prosegui").forEach((bottone) => {
  bottone.addEventListener("click", () => {
    startTimer(10); // Ogni volta che si clicca, ferma il vecchio timer e ne avvia uno nuovo
    cambiaRisposte(); // Cambia le risposte
  });
});

startTimer(10);
