function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('button.change-color');
const spanRef = document.querySelector('span.color');

btnRef.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.setAttribute('style', `background-color: ${color}`);
  spanRef.textContent = color;
});
