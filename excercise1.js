//EJERCICIO:
 
/* Crea un comentario en el código y coloca la URL del sitio web oficial del
lenguaje de programación que has seleccionado. */

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript */


/* Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...). */

// this is a comment in a single line

/* this is a comment
in different
lines
*/

/* Crea una variable (y una constante si el lenguaje lo soporta).*/

var a = 1;
console.log(a)

{
  var a = 11;
  console.log(a);
}
console.log(a)
/* global scope, you can redefined */


let b = 2;
console.log(b)

{
  let b = 22;
  console.log(b);
}
console.log(b)
/* let has a block scope. It cannot be redefined */


const c = 3;
console.log(c);
//const is a constant


 /* Crea variables representando todos los tipos de datos primitivos
 del lenguaje (cadenas de texto, enteros, booleanos...). */

//String
var d = 'this is a string';
var e = "this is another string";
var f = `this is another way to create a string`;
var g = new String('this is a different way to create a string');
console.log(d,e,f,g);

//Number
var h = 14;
console.log(h);

//BigInt
var i = 145145147525887745n;
var j = BigInt(8887878878878787787);
var k = BigInt('5454545454554545454');
console.log(i,j,k);

//Boolean
var l = true;
var m = false;
console.log(l,m);

//Symbol
const sym1 = Symbol();
const sym2 = Symbol('eyy');
const sym3 = Symbol("oee");
console.log(sym1,sym2,sym3);

//Undefined
var n;
console.log(n);
/* value assinged to variables has been declared but doesn't have an argument */

//Null
var o = null;
console.log(o);
/* Intentional absence of any object value */


/* Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!" */
console.log('Hi, JavaScript');


/* ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
debemos comenzar por el principio.
*/
