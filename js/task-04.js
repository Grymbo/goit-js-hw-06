// Obtener elementos del DOM
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

// Inicializar el valor del contador
let counterValue = 0;
counterValueEl.textContent = counterValue;

// Funciones para aumentar y disminuir el contador
function incrementCounter() {
  counterValue++;
  counterValueEl.textContent = counterValue;
}

function decrementCounter() {
  counterValue--;
  counterValueEl.textContent = counterValue;
}

// Añadir escuchadores de clic a los botones
decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener('click', incrementCounter);