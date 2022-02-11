const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

//* Option 1
// buttonDecrement.addEventListener('click', () => {
//   value.textContent--;
// });
// buttonIncrement.addEventListener('click', () => {
//   value.textContent++;
// });

//* Option 2
let counterValue = 0;
buttonDecrement.addEventListener('click', () => {
  counterValue--;
  value.textContent = counterValue;
});
buttonIncrement.addEventListener('click', () => {
  counterValue++;
  value.textContent = counterValue;
});
