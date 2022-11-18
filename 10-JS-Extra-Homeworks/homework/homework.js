// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arrayGlobal = [];
  for (var clave in objeto) {
    var arrayObjeto = [];
    arrayObjeto.push(clave);
    arrayObjeto.push(objeto[clave]); 
    arrayGlobal.push(arrayObjeto);
  }
  return arrayGlobal;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // PENSANDO YO
  var objetoGlobal = {};
  var array = string.split("").sort();//que hace el sort? lo ORDENA.
  for (i = 0; i < array.length; i++) {
    if (objetoGlobal[array[i]]) {
      objetoGlobal[array[i]] += + 1// += o = objetoGlobal[array[i]]
    } else {
      objetoGlobal[array[i]] = 1
    }  
  }
  return objetoGlobal;
}


function capToFront(string) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí:
  var mayus = "";
  var minus = "";
    for (var i = 0; i < string.length; i++) {
      if (string[i].toUpperCase()===string[i]) {
        mayus += string[i];          
    } else {
      minus += string[i];
    }
  }
  return mayus + minus;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  
  // Paso 1. Usa el método split() para devolver un nuevo arreglo
  //var separarCadena = str.split(""); // var separarCadena = "hola".split("");
  // ["h", "o", "l", "a"]

  // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
  //var invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse();
  // ["a", "l", "o", "h"]

  // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
  //var unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join("");
  // "aloh"
  
  //Paso 4. Devolver la cadena invertida
  //return unirArreglo;

  var res = "";
  var strNuevo = str.split (" ");
  for (i = 0; i < strNuevo.length; i++) {
    res += strNuevo[i].split("").reverse().join("");
    if (i !== strNuevo.length - 1) {
      res += " ";
    } 
  }
  return res;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número que se lee es igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var res= "Es capicua";
  var str = numero.toString();
  for (var i = 0; i < str.length; i++) {
    if (str[i]!==str[str.length-1-i]) {
      res = "No es capicua";
    }
  }
  return res;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaNueva = cadena.split("a").join('').split("b").join('').split("c").join('');
  return cadenaNueva;
  //profesor:
  //nuevaCadena = cadena.split("").filter(x => x!== "a" && x!== "b" && x!=="c")
  //return nuevaCadena.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí:
  //Obtener el array
  //Pasar como parámetros de comparación a y b
  return arr.sort(function(a, b) {
    //Los queremos ordenados del mas corto al mas largo, por lo tanto usamos...
    return a.length - b.length;
    //En caso contrario, usariamos return b.length - a.length
  });
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí:
  var nuevoArray = [];
  for (var i = 0; i < arreglo1.length; i++) {
    for (var o = 0; o < arreglo2.length; o++) {
      if (arreglo1[i]===arreglo2[o]) {
        nuevoArray.push(arreglo1[i]);
      }
    }
  }
  return nuevoArray;  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

