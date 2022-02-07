const formRef = document.querySelector('form.login-form');

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === '' || password === '') {
    return alert('Все поля формы должны быть заполнены!');
  }

  console.log({
    mail,
    password,
  });

  event.currentTarget.reset();
});
