// Seleziona il contenitore delle stelle e il form
const starsContainer = document.getElementById("stars-container");
const feedbackForm = document.querySelector("form");
let rating = 0; // Voto iniziale

// Crea le 10 stelle e aggiungile al contenitore
function createStars() {
  for (let i = 0; i < 10; i++) {
    const starDiv = document.createElement("div");
    starDiv.classList.add("star");
    const starImg = document.createElement("img");
    starImg.src = "./assets/img/star.svg"; // Immagine della stella
    starImg.alt = "star";
    starDiv.appendChild(starImg);
    starsContainer.appendChild(starDiv);
  }
}

// Funzione per aggiornare le stelle in base al voto
function updateStars() {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("active"); // Accendi la stella
    } else {
      star.classList.remove("active"); // Spegni la stella
    }
  });
}
// Evidenzia le stelle al passaggio del mouse
function highlightStars(index) {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("active"); // Evidenzia le stelle fino a quella sotto il cursore
    } else {
      star.classList.remove("active"); // Rimuovi evidenza dalle altre stelle
    }
  });
}

// Gestisci il click sulle stelle per selezionare il voto
starsContainer.addEventListener("click", (event) => {
  const index = [...starsContainer.children].indexOf(event.target.parentNode);
  if (index >= 0) {
    rating = index + 1; // Il voto è l'indice della stella + 1
    updateStars(); // Aggiorna le stelle
  }
});

// Gestisci l'hover per evidenziare le stelle
starsContainer.addEventListener("mouseover", (event) => {
  const index = [...starsContainer.children].indexOf(event.target.parentNode);
  if (index >= 0) {
    highlightStars(index); // Evidenzia le stelle
  }
});

// Ripristina lo stato delle stelle al termine dell'hover
starsContainer.addEventListener("mouseout", () => {
  updateStars(); // Ripristina lo stato delle stelle in base al voto
});

// Gestione dell'invio del form
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Previene l'invio del form

  const feedbackText = document.getElementById("text").value; // Ottiene il testo dal campo input

  // Verifica se è stato selezionato un voto
  if (rating === 0) {
    alert("Per favore, seleziona un punteggio.");
    return;
  }

  // Verifica se è stato scritto un commento
  if (feedbackText.trim() === "") {
    alert("Per favore, lascia un commento.");
    return;
  }

  // Mostra un messaggio di conferma
  alert("Grazie per il tuo feedback!");

  // Reset del form dopo invio
  rating = 0;
  document.getElementById("text").value = "";
  updateStars(); // Rimuove la selezione delle stelle
});

// Crea e aggiungi le stelle al caricamento della pagina
createStars();
