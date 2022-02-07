const inputRef = document.querySelector('input#validation-input');
inputRef.addEventListener('blur', () => {
  if (inputRef.value.length >= inputRef.dataset.length) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
  if (inputRef.value.length < inputRef.dataset.length) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
});
