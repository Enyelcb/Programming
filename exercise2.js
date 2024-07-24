//EJERCICIO:
/* Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
     Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
     (Ten en cuenta que cada lenguaje puede poseer unos diferentes) */

// ASSIGMENT OPERATORS
var a = 10;
console.log(a);

var aa = 1;
var bb = 2;
console.log(aa+=bb);
console.log(aa);
/* It can be done with addition, subtraction, multiplication. division, remainder
exponentiation */

//ARITHMETIC OPERATORS
//Addition
var b = 1;
var c = a+b;
console.log(c);

//Subtraction
var d = a+b;
console.log(d);

//Multiplication
var e = a*b;
console.log(e);

//Exponetiation
var f = a**b;
console.log(f);

//Division
var g = a/b;
console.log(g);

//Modulus
var h = a%b;
console.log(h);

//Increment
var i = a++
console.log(i);
var j = ++a;
console.log(j);

//Decrement
var k = b--;
console.log(k);
var l = --b;
console.log(l);


//COMPARASION
//Equal
var aaa = 1;
var aaaa = '1';
console.log(aaa==aaaa);

//Not equal
console.log(aaa!=aaaa);

//Strict equal
console.log(aaa===aaaa);

//strict not equal
console.log(aaa!==aaaa);

//Greater than
console.log(a > b);

//Greater than or equal
console.log(a >= b);

//Less than
console.log(a < b);

//Less than or equal
console.log(a <= b);


//LOGICAL OPERATORS
//And
var n = aaa < aaaa 
var p == aaa < b;
console.log(n && p);

//Or
console.log(n || p);

//Nullish coalescing
console.log(null ?? p);
console.log(p ?? null);

//Not
console.log(!(a==a));

//BIGINT
// Most of the operators in arithmetic operators can be used here

//STRING
var ca = 'my';
var co = 'self';
console.log(ca+co);
console.log(ca+='you');

//CONDITIONAL(TERNARY)
var age1 = 12;
var age2 = 32;
var es = age1 >= 18 ? 'adult' : 'minor';
var ess = age2 >= 18 ? 'agult' : 'minor';
console.log(age1,age2);

//COMMA
//evaluates each of tis operads and returns the value of the last operand
// it is common in for loops
var x = 1;
x = (x++,x);
console.log(x);


//UNARY
//Delete
const myObj = {h:4};
delete myObj.h;

//Deleting array elements
var asas = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var asss = asas.splice(3,1);
console.log(asss);

//Typeof
console.log(typeof asas);

//RELATIONAL OPERATORS
//In
const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
console.log( 0 in trees);
console.log('bay' in trees);
/* you must specify the index number not the value */

console.log('length' in trees);
// length is an array property for thar reason returns true

//Instanceof
//Use instanceof when you need to confirm the type of an object at runtime.
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  console.log('hey');
}


 /* Utilizando las operaciones con operadores que tú quieras, crea ejemplos
  que representen todos los tipos de estructuras de control que existan
  en tu lenguaje:
    Condicionales, iterativas, excepciones...
  Debes hacer print por consola del resultado de todos los ejemplos. */

//CONDITIONAL STATEMENTS
//If
var ti = 12;
if (ti > 1){
     console.log('the value is too big');
}

//If else
var arrived = 12;
var time = 13;
if(arrive === time){
     console.log('congratulation, you are a job employer');
}else{
     console.log('Im sorry you are fired')
}

//Else if
var ca = 14;
if(arrived === time){
     console.log('congratulations, you are doing great');
}else if(arrived === ca){
     console.log('it is ok, the next time, you must to arrive on time');
}else{
     console.log('it is not acceptable, you are fire');
}

//Switch
var ta = 'California';
switch(ta){
     case 'New York':
          console.log('Welcome to New York');
          break;           
     case 'Maine':
          console.log('Are you sure that you like Maine');
          break;
     case 'California':
          console.log('California is the best option, you will enjoy it');
          break;
     default:
          console.log('There are not more options, check your answer please');
}


//LOOPS
//For
var food = ['chicken','coffe', 'grapes', 'apples', 'te', 'soda'];
for(let a = 0, a < food.length, a++){
     console.log(`i love this food: ${a}`);
}

//Do...while
var kk = 0;
do{
     kk += 1;
     console.log(`this is the amount of food i like ${food[kk+1]} and is ${kk}`);
}while( kk < 4);

//While
qq = 0;
while(qq < 5){
     qq++;
     console.log(qq);
}


//BREAK
var countries = ['canada', 'colombia', ' venezuela', 'mexico', 'honduras', 'france', 'spain'];
for(let i = 0, i < countries.length, i++){
     console.log(`me gusta: ${countries}`);
     if (countries[i] === 'france'){
          break;
     }
}

var zz = 0;
whereILive: while(true){
     console.log(`${countries[zz] this is not your country`);
     zz++;
     for(let xx=0, xx <= ee.length, xx++){
              let ee= [0,1,2,3,4,5,6,7,8,9];
              console.log(`this is not your department ${ee[xx]}`);
              if (countries === 'colombia' && ee[8]{
                console.log('we have found our goal');
                break whereILive;
              }else if(zz == countries.length){
                break;
              }
      }
}

//CONTINUE




 //DIFICULTAD EXTRA (opcional):
 /* Crea un programa que imprima por consola todos los números comprendidos
 entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3. */
 
//Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
