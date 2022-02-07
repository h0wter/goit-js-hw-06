const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', event => {
  output.textContent = input.value;
  if (!input.value) {
    output.textContent = 'Anonymous';
  }
});
