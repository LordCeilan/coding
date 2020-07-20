//Let o Var determinan el alcance de la variable
var userName = "jhon";
let userLastname = "carter";

//Define una constante 
const PI = 3.1416

console.log(userLastname);
console.log(userName);

userName = "carl";
userLastname = "jose";

/*
Las variables no pueden empezar con un numero
pueden empezar con $ o con _ aúnque la verdad
no se en que momento las usaría 
*/

console.log(userName);
console.log(userLastname);
console.log(PI);

//Aqui pongo diferente tipos de casing Camel case etc
let nickName = 'ceilan';
let nombreDePersona = 'gordon';
let user_name = '';
console.log(nickName);

/* Operadores */
let numberOne = 60;
let numberTwo = 100;

let resultPlus = numberOne + numberTwo;
let resultMinus = numberOne - numberTwo;
let resultMult = numberOne * numberTwo;
let resultDiv = numberOne / numberTwo;

console.log(resultPlus);
console.log(resultMinus);
console.log(resultMult);
console.log(resultDiv);
//esto es una concatenación
let operatorName = 'Jhon';
let operatorLastname = 'Carter';

let operatorFullName = operatorName + ' ' + operatorLastname;
console.log(operatorFullName);

/*Se pueden guardar comparaciones
    solo hay dos opciones, 
    False
    True
*/
let comparationHigher = numberOne > numberTwo;
let comparationLower = numberOne < numberTwo;
let comparationEqual = numberOne == numberTwo;
let comparationNotEqual = numberOne != numberTwo;
let comparationHigherEqual = numberOne >= numberTwo;
let comparationLowerEqual = numberOne <= numberTwo;


console.log(comparationHigher);
console.log(comparationLower);
console.log(comparationEqual);
console.log(comparationNotEqual);
console.log(comparationHigherEqual);
console.log(comparationLowerEqual);

//intento de login con contraseña

/* condicionales */
let passwordDb= 'pepe123'
let input = 'pepe123'
let passwordTry = passwordDb == input;

/*
ciclo if
El condicional triple es una comparación mucho mas fuerte
*/

if (passwordTry === true){
    console.log('Login Correcto');
} else {
    console.log('Login incorrecto');

}

console.log(passwordTry);

//If else if anidados

let puntuacionJuego = 24;

if (puntuacionJuego >= 50){
    console.log('Eres un buen jugador');
} else if(puntuacionJuego >= 25 && puntuacionJuego < 50){
    console.log('estas mejorando') 
} else {
    console.log('Debes practicar más')
}

//Switch case

let typeCard = 'Debid asdCard';
switch(typeCard){
    case 'Debit Card':
        console.log('This is a debit card');
        break;
    
    case 'Debid Card':
        console.log('This is a debid card');
        break;

     default:
         console.log('Tu tarjeta no coincide con la base de datos');
         console.log('Intentalo de nuevo con una tarjeta');   
}

//Bucles 
let count = 50;

while(count > 0){
    console.log('Hello World');
    count = count - 1; 
}

count = 50;

while(count > 0){
    console.log(count);
    count--;
}

count = 0;

while(count <= 50){
    console.log(count);
    count++;
}

// Ciclo For

let listNames = ['Carlas', 'Nacalas', 'vactar'];

//Conseguir un dato especifico del arreglo
console.log(listNames);
console.log(listNames[0]);
console.log(listNames[1]);
console.log(listNames[2]);

//largo de un arreglo
console.log(listNames.length);

for(let i = listNames.length - 1; i >= 0 ; i--){
    console.log(listNames[i]);
}

for(let i = 0; i < listNames.length; i++){
    console.log(listNames[i]);
}

/*Funciones dattebyo*/
function greeting(person){
    /*Lo que sucede es que lo que reciba esta función sera 
    declarado en este caso como name
    */
    console.log('Hello' + ' ' + person);
}

greeting('markus');
greeting('conor');
greeting('clara');
//sintaxis basicas.
function add(n1, n2){
    console.log('tus numeros son', n1, 'y' ,n2);
    console.log(n1 + ' + ' + n2 + ' =' , n1 + n2);
}

add(1,2);
add(numberOne,numberTwo);


 