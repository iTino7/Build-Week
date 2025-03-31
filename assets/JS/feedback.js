// FORM

const containerStar = () => {
  const star = document.querySelector(".star");
  const containerImg = document.createElement("img");
  containerImg.src = "../star.svg";
  containerImg.alt = "star";

  star.appendChild(containerImg);
};

containerStar();
