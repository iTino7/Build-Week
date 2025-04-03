let difficulty = localStorage.getItem("selectedDifficulty");
let domande = {};
if (difficulty === "easy") {
  domande = {
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
        correct_answer: `'For' loops`,
        incorrect_answers: [`'If' Statements`, `'Do-while' loops`, `'While' loops`],
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
        question: `"HTML" stands for Hypertext Markup Language.`,
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
} else if (difficulty === "medium") {
  domande = {
    response_code: 0,
    results: [
      {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "What is the number of keys on a standard Windows Keyboard?",
        correct_answer: "104",
        incorrect_answers: ["64", "94", "76"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
        correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
        incorrect_answers: ["&lt;scroll&gt;&lt;/scroll&gt;", "&lt;move&gt;&lt;/move&gt;", "&lt;slide&gt;&lt;/slide&gt;"],
      },
      {
        type: "boolean",
        difficulty: "medium",
        category: "Science: Computers",
        question: "The last Windows operating system to be based on the Windows 9x kernel was Windows 98.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        type: "boolean",
        difficulty: "medium",
        category: "Science: Computers",
        question: "The common software-programming acronym &quot;I18N&quot; comes from the term &quot;Interlocalization&quot;.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
        correct_answer: "Amazon",
        incorrect_answers: ["eBay", "Overstock", "Shopify"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "On which computer hardware device is the BIOS chip located?",
        correct_answer: "Motherboard",
        incorrect_answers: ["Hard Disk Drive", "Central Processing Unit", "Graphics Processing Unit"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "When did the online streaming service &quot;Mixer&quot; launch?",
        correct_answer: "2016",
        incorrect_answers: ["2013", "2009", "2011"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "Which programming language was developed by Sun Microsystems in 1995?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "Solaris OS", "C++"],
      },
      {
        type: "boolean",
        difficulty: "medium",
        category: "Science: Computers",
        question: "FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "What does RAID stand for?",
        correct_answer: "Redundant Array of Independent Disks",
        incorrect_answers: [
          "Rapid Access for Indexed Devices",
          "Range of Applications with Identical Designs",
          "Randomized Abstract Identification Description",
        ],
      },
    ],
  };
} else {
  domande = {
    response_code: 0,
    results: [
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "How many Hz does the video standard PAL support?",
        correct_answer: "50",
        incorrect_answers: ["59", "60", "25"],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "What port does HTTP run on?",
        correct_answer: "80",
        incorrect_answers: ["53", "443", "23"],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
        correct_answer: "Cherry MX Blue",
        incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "What major programming language does Unreal Engine 4 use?",
        correct_answer: "C++",
        incorrect_answers: ["Assembly", "C#", "ECMAScript"],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
        correct_answer: "2005",
        incorrect_answers: ["1999", "2002", "2008"],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "Which of the following computer components can be built using only NAND gates?",
        correct_answer: "ALU",
        incorrect_answers: ["CPU", "RAM", "Register"],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "Which kind of algorithm is Ron Rivest not famous for creating?",
        correct_answer: "Secret sharing scheme",
        incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "What was the first company to use the term &quot;Golden Master&quot;?",
        correct_answer: "Apple",
        incorrect_answers: ["IBM", "Microsoft", "Google"],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
        correct_answer: "Coffee Lake",
        incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "Which of these is not a key value of Agile software development?",
        correct_answer: "Comprehensive documentation",
        incorrect_answers: ["Individuals and interactions", "Customer collaboration", "Responding to change"],
      },
    ],
  };
}

let index = 0; //inizializiamo l'indice per scorrere le domande a 0

window.myApp = window.myApp || {};
window.myApp.risposteGiuste = 0;
window.myApp.risposteGiusteStr = [];
window.myApp.risposteSbagliate = 0;
window.myApp.risposteSbagliateStr = [];
window.myApp.risposteTotaliArr = [];
window.myApp.domande = [];
window.myApp.risposteTotali = 0;
window.myApp.media = 0;

for (let i = 0; i < domande.results.length; i++) {
  window.myApp.domande.push(domande.results[i].question);
}
console.log(window.myApp.domande);
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
  const bottoni = document.querySelectorAll("button:not(.prosegui button)");
  if (bottoneSelezionato) {
    if (bottoneSelezionato.innerText === domanda.correct_answer) {
      window.myApp.risposteGiuste += 1;
      window.myApp.risposteGiusteStr.push(`${index}`);
      window.myApp.risposteTotaliArr.push(`${bottoneSelezionato.innerText}`);
    } else {
      window.myApp.risposteSbagliate += 1;
      window.myApp.risposteSbagliateStr.push(`${index}`);
      window.myApp.risposteTotaliArr.push(`${bottoneSelezionato.innerText}`);
    }
    window.myApp.risposteTotali += 1;
  } else {
    window.myApp.risposteSbagliate += 1;
    window.myApp.risposteTotaliArr.push("Non hai inserito una risposta");
    window.myApp.risposteSbagliateStr.push(`Non hai inserito una risposta`);
    window.myApp.risposteTotali += 1;
  }
  window.myApp.media = (window.myApp.risposteGiuste / window.myApp.risposteTotali) * 100;
  localStorage.setItem("risposteGiuste", window.myApp.risposteGiuste);
  localStorage.setItem("risposteTotali", window.myApp.risposteTotali);
  localStorage.setItem("media", window.myApp.media);
  localStorage.setItem("risposteSbagliate", window.myApp.risposteSbagliate);
  localStorage.setItem("risposteSbagliateStr", window.myApp.risposteSbagliateStr);
  localStorage.setItem("risposteGiusteStr", window.myApp.risposteGiusteStr);
  localStorage.setItem("risposteTotaliArr", window.myApp.risposteTotaliArr);

  if (bottoneSelezionato) {
    if (bottoneSelezionato.innerText === domanda.correct_answer) {
      bottoneSelezionato.classList.add("esatto");
    } else {
      bottoneSelezionato.classList.add("sbagliato");

      bottoni.forEach((bottone) => {
        if (bottone.innerText === domanda.correct_answer) {
          bottone.classList.add("esatto");
        }
      });
    }
  } else {
    bottoni.forEach((bottone) => {
      if (bottone.innerText === domanda.correct_answer) {
        bottone.classList.add("esatto");
      } else {
        bottone.classList.add("sbagliato");
      }
    });
  }

  if (isNaN(window.myApp.media)) {
    window.myApp.media = 0;
  }
  localStorage.setItem("media", window.myApp.media);
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
    myH1.innerHTML = domanda.question;
    document.querySelector(".box").appendChild(myH1);

    //Prendo le risposte e le mischio in modo che la risposta esatta sia sempre in una posizione diversa
    const risposte = [...domanda.incorrect_answers, domanda.correct_answer];
    risposte.sort(() => Math.random() - 0.5);

    //Creo i bottoni con le domande
    for (let i = 0; i < risposte.length; i++) {
      let btnAnswer = document.createElement("button");
      btnAnswer.innerHTML = risposte[i];
      document.getElementsByClassName("button")[0].appendChild(btnAnswer);

      // Aggiungi event listener a ogni bottone di risposta
      btnAnswer.addEventListener("click", selected);
    }

    let questionCounter = document.querySelector(".index");
    questionCounter.textContent = `${index + 1}`;
    index++;
  } else {
    window.open(`result.html`, `_self`);
  }
}

// Avvia il quiz
cambiaDomande();

let countdown; // Variabile globale per il timer

function startTimer(duration) {
  let timeLeft = duration;
  let textElement = document.getElementById("timer-text");
  let animation = document.getElementById("timer-animation");
  let tempo = document.querySelectorAll("circle")[0];
  tempo.style.stroke = "cyan";
  textElement.textContent = "10";
  textElement.textContent = timeLeft;
  clearInterval(countdown);
  animation.beginElement();

  countdown = setInterval(() => {
    timeLeft--;
    textElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      textElement.textContent;
      timeLeft = 10;
      valutaRisposta();
      setTimeout(() => {
        startTimer(10);
        cambiaDomande();
      }, 3000);
    }
    if (timeLeft <= 5) {
      tempo.style.stroke = "yellow";
    }
    if (timeLeft <= 3) {
      tempo.style.stroke = "red";
    }
    if (timeLeft > 5) {
      tempo.style.stroke = "cyan";
    }
  }, 1000);
}

// Associa il timer al bottone prosegui
document.querySelectorAll(".prosegui").forEach((bottone) => {
  bottone.addEventListener("click", () => {
    clearInterval(countdown);
    valutaRisposta(); // Valuta la risposta prima di cambiare domanda
    setTimeout(() => {
      startTimer(10); // Ogni volta che si clicca, ferma il vecchio timer e ne avvia uno nuovo
      cambiaDomande(); // Cambia domanda
    }, 1000);
  });
});

startTimer(10);
