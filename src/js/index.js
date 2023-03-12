const buttonCarrousel = document.querySelectorAll(".button");
const imagesCarrousel = document.querySelectorAll(".image");

buttonCarrousel.forEach((button, i) => {
  button.addEventListener("click", () => {
    selectButton(button);
    selectImage(i);
  });
});
function selectImage(i) {
  const imageActive = document.querySelector(".active");

  imageActive.classList.remove("active");

  imagesCarrousel[i].classList.add("active");
}

function selectButton(button) {
  const buttonSelect = document.querySelector(".select");
  buttonSelect.classList.remove("select");

  button.classList.add("select");
}
