const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar que la página se recargue

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // Validar que los campos no estén en blanco
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Por favor, rellene todos los campos.');
    return;
  }

  // Recopilar los valores de los campos en un objeto
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  // Mostrar el objeto con los datos en la consola
  console.log(formData);

  // Reiniciar los valores del formulario
  loginForm.reset();
});
