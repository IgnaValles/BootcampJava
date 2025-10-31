function crearContador(inicio = 0, paso = 1) {
  let valor = inicio; // guardamos el valor actual

  return function () {
    valor += paso; // sumamos el paso
    return valor; // devolvemos el nuevo valor
  };
}

const contador = crearContador(5, 2); // empieza en 5, suma de 2 en 2

console.log(contador()); // 7
console.log(contador()); // 9
console.log(contador()); // 11

let cache = {};
function suma(a, b) {}
