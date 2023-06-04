function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
})

