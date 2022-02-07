const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', event => {
  output.textContent = input.value.trim();
  if (!input.value.trim()) {
    output.textContent = 'Anonymous';
  }
});
