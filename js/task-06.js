const inputRef = document.querySelector('input#validation-input');
inputRef.addEventListener('blur', () => {
  if (inputRef.value.trim().length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
});
