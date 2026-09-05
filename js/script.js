const botonModo = document.getElementById('botonModo');

botonModo.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    botonModo.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

let contador = 0;
const valorContador = document.getElementById('valorContador');
const botonSumar = document.getElementById('botonSumar');
const botonRestar = document.getElementById('botonRestar');

botonSumar.addEventListener('click', () => {
    contador++;                    // contador = contador + 1
    valorContador.textContent = contador;
});

botonRestar.addEventListener('click', () => {
    contador--;                    // contador = contador - 1
    valorContador.textContent = contador;
});