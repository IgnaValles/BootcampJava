//Ejercicio 1

/* console.log("Inicio");

setTimeout(() => console.log("setTimeout ejecutado"), 0);

Promise.resolve()
  .then(() => {
    console.log("Promesa resuelta");
    return Promise.resolve();
  })
  .then(() => {
    console.log("Segunda promesa encadenada");
  });

console.log("Fin");

*/

//Ejercicio 2

function consultarBaseDeDatos(callback) {
  setTimeout(() => {
    console.log("Consultando base de datos...");
    callback();
  }, 2000); // espera 2 segundos
}

function procesarDatos(callback) {
  setTimeout(() => {
    console.log("Procesando datos...");
    callback();
  }, 1000); // espera 1 segundo
}

function operacionCompletada() {
  console.log("Operación completada");
}

// Llamamos a las funciones con callbacks anidados
consultarBaseDeDatos(() => {
  procesarDatos(() => {
    operacionCompletada();
  });
});
