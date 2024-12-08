 // перейти/выйти из добавления
const plusButton = document.querySelector('.plus');
const addSection = document.querySelector('.add');
const addButton = document.querySelector('.add_btn');

plusButton.addEventListener('click', () => {
addSection.style.display = 'block'});

addButton.addEventListener('click', () => {
addSection.style.display = 'none'});
