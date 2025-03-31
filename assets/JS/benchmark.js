const risposte = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What amount of bits commonly equals one byte?",
      correct_answer: "8",
      incorrect_answers: ["1", "2", "64"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "The Electron computer was released in Britain during 1983 for the home computing market, by which company? ",
      correct_answer: "Acorn Computers",
      incorrect_answers: ["Sinclair Research", "Amstrad PLC", "Commodore Business Machines"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does the &quot;MP&quot; stand for in MP3?",
      correct_answer: "Moving Picture",
      incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "This mobile OS held the largest market share in 2012.",
      correct_answer: "iOS",
      incorrect_answers: ["Android", "BlackBerry", "Symbian"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "How long is an IPv6 address?",
      correct_answer: "128 bits",
      incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "In computing, what does MIDI stand for?",
      correct_answer: "Musical Instrument Digital Interface",
      incorrect_answers: ["Musical Interface of Digital Instruments", "Modular Interface of Digital Instruments", "Musical Instrument Data Interface"],
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
      question: "A Mac is not a PC",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
  ],
};

// Variabile globale per tracciare la domanda corrente
let currentQuestionIndex = 0;

// Funzione per cambiare i testi dei bottoni
function cambiaRisposte() {
  let bottoni = document.querySelectorAll("button");

  // Se siamo oltre la lunghezza delle domande, esce
  if (currentQuestionIndex >= risposte.results.length) {
    alert("Quiz completato!");
    return;
  }

  // Ottieni la domanda corrente
  let currentQuestion = risposte.results[currentQuestionIndex];

  // Aggiorna l'h1 con la domanda corrente
  let headerElement = document.querySelector("h1");
  if (headerElement) {
    headerElement.innerHTML = currentQuestion.question;
  }

  // Aggiorna il contatore delle domande
  let questionCounter = document.querySelector("p > span");
  if (questionCounter) {
    questionCounter.textContent = `${currentQuestionIndex + 1}/${risposte.results.length}`;
  }

  // Crea un array con tutte le risposte (corretta + incorrette)
  let allAnswers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];

  // Mescola le risposte per non avere sempre la risposta corretta nella stessa posizione
  shuffleArray(allAnswers);

  // Assegna le risposte ai bottoni (se ci sono abbastanza bottoni)
  for (let i = 0; i < bottoni.length && i < allAnswers.length; i++) {
    bottoni[i].innerHTML = allAnswers[i];
  }

  // Quando un bottone viene cliccato, incrementa l'indice e cambia la domanda
  bottoni.forEach((button) => {
    button.onclick = () => {
      currentQuestionIndex++; // Passa alla domanda successiva
      cambiaRisposte(); // Cambia le risposte
    };
  });
}

// Funzione per mescolare un array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Inizializza il quiz quando il DOM è completamente caricato
document.addEventListener("DOMContentLoaded", function () {
  cambiaRisposte();
});

let countdown; // Variabile globale per il timer

function startTimer(duration) {
  let timerElement = document.getElementById("timer");
  let timerContainer = document.getElementById("timer-container");
  let timeLeft = duration;

  // Ferma il timer precedente se esiste
  clearInterval(countdown);

  // Imposta lo stile iniziale della ciambella
  timerContainer.style.border = "10px solid blue";

  countdown = setInterval(() => {
    timerElement.textContent = timeLeft;

    let sliceAngle = (1 - timeLeft / duration) * 360;
    timerContainer.style.borderImage = `conic-gradient(transparent 0deg ${sliceAngle}deg, blue ${sliceAngle}deg 360deg) 1`;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdown);
      timerContainer.style.border = "0px solid transparent";
      alert("Tempo scaduto!");
    }
  }, 1000);
}

// Associa il timer ai bottoni senza avviarlo immediatamente
document.querySelectorAll("button").forEach((bottone) => {
  bottone.addEventListener("click", () => {
    startTimer(10); // Ogni volta che si clicca, ferma il vecchio timer e ne avvia uno nuovo
    currentQuestionIndex++; // Passa alla domanda successiva
    cambiaRisposte(); // Cambia le risposte
  });
});
