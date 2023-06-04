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
  boxesEl.innerHTML = '';
  for(let i = 0; i < amount; i++){
    const size = 30 + i * 10;
    const item = document.createElement('div');
    const nameColor = document.createElement('p');
    nameColor.textContent = getRandomHexColor();
    
    nameColor.style.width = '100%';
    nameColor.style.fontSize = '12px'
    nameColor.style.display = 'flex';
    nameColor.style.justifyContent = 'center';
    nameColor.style.alignItems = 'center'
    
    item.appendChild(nameColor);
    item.style.display = 'flex'
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(item)
    
}}

function destroyBoxes () {
  boxesEl.innerHTML = '';
};

createBtnEl.addEventListener('click', createBoxes)
destroyBtnel.addEventListener('click', destroyBoxes)


