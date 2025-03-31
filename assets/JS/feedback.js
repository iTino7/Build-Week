// FORM

const containerStar = () => {
  const star = document.querySelector(".star");

  for (let i = 1; i <= 10; i++) {
    const containerImg = document.createElement("img");
    containerImg.src = "/assets/star.svg";
    containerImg.alt = "star";
    star.appendChild(containerImg);
  }
};

containerStar();
