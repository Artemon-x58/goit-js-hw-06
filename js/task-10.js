function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtnEl = document.querySelector('[data-create]');
const destroyBtnel = document.querySelector('[data-destroy]');
const inputNumberEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  amount = Number(inputNumberEl.value);
  for(let i = 0; i < amount; i++){
    const size = 30 + i * 10;
    const item = document.createElement('div');
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(item)
    // boxesEl.insertAdjacentHTML("beforeend", '<div width ="${size}" height = "${size}"></div>')
  }
}

function destroyBoxes () {
  boxesEl.innerHTML = '';
};

createBtnEl.addEventListener('click', createBoxes)
destroyBtnel.addEventListener('click', destroyBoxes)


