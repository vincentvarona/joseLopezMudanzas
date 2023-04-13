const botonHamburguesa = document.querySelector('#logo-hamb');
const menu = document.querySelector('#menu-desp');

let menuVisible = false;

botonHamburguesa.addEventListener('click', () => {
  if (menuVisible) {
    menu.style.display = "none";
    menuVisible = false;
  } else {
    menu.style.display = "block";
    menuVisible = true;
  }
});

const telefono = document.getElementById("numbers");
const texto = telefono.textContent;
let indice = 0;

function animarTelefono() {
  telefono.textContent = "";
  indice = 0;

  function agregarCaracter() {
    telefono.textContent += texto.charAt(indice);
    indice++;

    if (indice >= texto.length) {
      clearInterval(intervalo);
      setTimeout(animarTelefono, 5000); // Llamar a la función de nuevo después de 5 segundos
    }
  }

  const intervalo = setInterval(agregarCaracter, 100);
}

setTimeout(animarTelefono, 5000); // Llamar a la función después de 5 segundos
