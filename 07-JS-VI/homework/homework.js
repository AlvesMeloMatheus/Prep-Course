// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //'OTRA MANERA' return nombre.charAt(0).toUpperCase() + nombre.substr(1,nombre.length -1);
  var res = "";
  for (var i = 0; i < nombre.length; i++) {
    if ( i===0 ) {
      res = nombre.charAt(0).toUpperCase();
    } else {
      res += nombre.charAt(i);
    }
  }
  return res;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  // previousValue(primer valor) (sinal algebrico que quiera usar o sea (+,-,*,/) ) currentValue(valor actual)
  // 0 representa el initialValue
  cb(numeros.reduce((previousValue, currentValue) => previousValue + currentValue,0));
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach (
    //elemento => {
    //cb(elemento);
    //}
  function(elemento,indice){
    cb(elemento);
  }
  
  );

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray;
  nuevoArray = array.map(
    function(elemento,indice){
      return cb(elemento)
    }
  );
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  // Mi manera
  /*var nuevoArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i][0] === "a" ) {
      nuevoArray.push(array[i]);    
    }
  }
  return nuevoArray;*/
  // Otra manera

  return array.filter(
    function(elemento, indice) { 
      return (elemento[0] === "a" )
    }
  );
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
