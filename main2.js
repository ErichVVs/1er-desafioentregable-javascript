/*for (let i = 1; i <= 5; i++) {
    alert(i);
}

let ingresarNumero = parseInt(prompt("Ingresar Número: "));

for (let i = 1; i <= 6; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero + " x " + i + " = " + resultado);
}

let numeroMultiplicar = parseInt(prompt("Ingresa el número que quieras multiplicar: "));

for(let i = 0; i <= 14; i++){
    let resultado = (numeroMultiplicar * i);
    alert(numeroMultiplicar + "x" + i + "=" + resultado);
}

let numeroSumado = parseInt(prompt("Ingrese su número a sumar: "));

for( let i = 1; i <= 15; i++){
    let resultado = (numeroSumado + i);
    alert(numeroSumado + "+" + i + "=" + resultado);
}

let numeroMultiplicar = parseInt(prompt("Ingresa el monto de deuda que se calculara mensualmente: "));

for(let i = 1; i <= 12; i++){
    let resultado = (numeroMultiplicar * i);
    alert(numeroMultiplicar + "x" + i + "=" + resultado);
}

for(let i = 1; i <=10; i++){
    let ingresarNombre = prompt("Ingresar nombre: ");
    alert( "Turno N°: " + i + "  Nombre: " + ingresarNombre);
}

for(let i = 1; i <= 10; i++){
    if(i == 6){
        break
    }
    alert(i);
}

for(let i = 1; i <= 10; i++){
    if(i == 9){
        break;
    }
    alert(i);
}

for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }
    alert(i);
}

for(let i = 1; i <= 20; i++){
    if((i == 5) || (i == 10) || (i == 15)){
        continue;
    }
    alert(i);
}

let repetir = true;
while(repetir){
    console.log("Al infinito y más allá!");
}

let entrada = prompt("Ingresar un dato: ");
while((entrada != "ESC") && (entrada != "esc") && (entrada != "Esc")){
    alert("El usuario ingresó: " + entrada);
    entrada = prompt("Ingresar otro dato");
}

let repetir = false;

do{
    console.log("Solo una vez!");
}while(repetir)

let numero = 0;
do {
    numero = prompt("Ingresar Número: ");
    console.log(numero);
}while(parseFloat(numero));

let entrada = prompt ("Ingresar un nombre: ")

let repetir = false;
do{
    console.log("Sólo una vez!!");
}while(repetir);

let repetir = false;
do{
    alert("Sólo una vez!!");
}while(repetir);


let repetir = false;
do{
    console.log("Sólo se repita una vez!!");
}while(repetir);

let numero = "fd";
do{
    numero = prompt ("Ingresar un Número: ");
    console.log(numero);
}while(parseInt(numero));

let letra = prompt("Ingrese la letra: ");

do{
    console.log(letra);
}while(prompt("Ingresa otra letra: "));


let numero = prompt("Ingresar un nombre");

while(numero != "ESC"){
        
    switch(numero){
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
        }
    numero = prompt("Ingresar un nombre: ");    
}

//HAcer match sólo con los nombres que incluye switch.

let entrada = prompt("Ingresar el nombre de un mago en el Barsa: ");

while(entrada != "esc"){
    switch(entrada){
        case "PEDRI":
            alert("HOLA PEDRI");
            break;
        case "GAVI":
            alert("HOLA GAVI");
            break;
        case "MESSI":
            alert("HOLA MESSI");
            break;
        default:
            alert("BUENO, PERO NO MAGO.")
            break;
    }
    entrada = prompt("Ingresar el nombre de una mago en el Barsa: ");
}


const numeros = [1,2,3,4,5];

console.log ( numeros[0]);
console.log ( numeros[3]);

let resultado = numeros[1] + numeros[2];
console.log (resultado);

function saludar(){
    alert("Hola estudiantes!");
}

saludar();

function resultadoFutbol(){
    alert("El Barcelona ganó 2-0 al Red Bull!!");
}

resultadoFutbol();



let nombreIngresado = prompt("Ingresar nombre:");
alert("El nombre ingresado es: " + nombreIngresado);

nombreIngresado = prompt("Ingresar nombre:");
alert("El nombre ingresado es: " + nombreIngresado);

nombreIngresado = prompt("Ingresar nombre:");
alert("El nombre ingresado es: " + nombreIngresado);

function solicitarNombre (){
    let nombreIngresado = prompt("Ingresar nombre: ");
    alert("Nombre ingresado: " + nombreIngresado);
}

solicitarNombre();
solicitarNombre();
solicitarNombre();

function conParametros(parametro1, parametro2){
    alert(parametro1 +  " " + parametro2);
}
conParametros("Hola", "Coder");
conParametros("Cursando", "JS");

function resultadoFutbol(equipo1, equipo2, resultado){
    alert(`El resultado del partido: ${equipo1} VS ${equipo2} fue de: ${resultado}`);
}

resultadoFutbol("Barcelona", "Juventus", "2-2");
resultadoFutbol("Barcelona", "Real Madrid", "1-0");

let resultado = 0;

function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}

function mostrar(mensaje){
    alert(mensaje);
}

sumar(6, 3);
mostrar(resultado);

let aniosdeCarrera = 0;

function sumar(carreraPre, carreraPro){
    aniosdeCarrera = carreraPre + carreraPro;
}

function resultadoSuma(mensaje){
    alert(mensaje)
}

sumar(10, 20);
resultadoSuma(aniosdeCarrera);


function sumar(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}
let resultado = sumar(5,8);

alert(resultado);

function calculadora(primerNumero, segundoNumero, operacion){
    switch (operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "%":
            return primerNumero % segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

alert(calculadora(10,20, prompt("Ingresa signo para la operación: ")));
alert(calculadora(10,20, prompt("Ingresa signo para la operación: ")));
alert(calculadora(10,20, prompt("Ingresa signo para la operación: ")));
alert(calculadora(10,20, prompt("Ingresa signo para la operación: ")));
alert(calculadora(10,20, prompt("Ingresa signo para la operación: ")));

let resultado = 0;

function suma(numero1, numero2){
    resultado = numero1 + numero2; 
}

suma(5,8);
alert(resultado);

function sumar(primerNumero, segundoNumero){
    let resultado = primerNumero + segundoNumero;
    alert("El resultado es: " + resultado);
}

sumar(5, 6);

let nombre = "John Doe";

function saludar(){
    let nombre = "Juan Coder";
    alert(nombre);
}

saludar(nombre);
alert(nombre);

const suma = function (a, b){return a + b};
const resta = function (a, b){return a - b};

alert(suma(10,3));
alert(resta(10,6));

const multiplicar = function(a,b){return a * b};
const dividir = function(a,b){return a / b};

alert(multiplicar(5,8));
alert(parseInt(dividir(100, 9)));

const suma = (a, b) => {return a + b};
const resta = (a, b) => {return a - b};

alert(suma(10, 2));
alert(resta(10, 5));

const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

alert(multiplicar(8, 7));
alert(dividir(100, 10));

const sumar = (a, b) => {return a + b};
const restar = (a, b) => {return a - b};

alert(sumar(10, 7));
alert(restar(54, 23));

const multiplicar = (a, b) => a * b;
const dividir = (a, c) => a / c;

alert(multiplicar(40, 3));
alert(dividir(32, 8));

const persona1 = {
    nombre: "Homero", 
    edad: 39, 
    calle: "AV. Siempreviva 742"
    };
alert(persona1.nombre);
alert(persona1.edad);
alert(persona1.calle);

const resultadosBarcelona = {
    partido1: "Barcelona 6 - 0 Inter Miami",
    partido2: "Barcelona 1 - 0 Real Madrid",
    partido3: "Barcelona 2 - 2 Juventus",
    partido4: "Barcelona 2 - 0 RedBulls"
};

alert(resultadosBarcelona.partido1);
alert(resultadosBarcelona.partido2);
alert(resultadosBarcelona.partido3);
alert(resultadosBarcelona.partido4);

const resultadosBarcelona = {
    partido1: "Barcelona 6 - 0 Inter Miami",
    partido2: "Barcelona 1 - 0 Real Madrid",
    partido3: "Barcelona 2 - 2 Juventus",
    partido4: "Barcelona 2 - 0 RedBulls"
};

alert(resultadosBarcelona["partido1"]);
alert(resultadosBarcelona["partido2"]);
alert(resultadosBarcelona["partido3"]);
alert(resultadosBarcelona["partido4"]);

const resultadosBarcelona = {
    partido1: "Barcelona 6 - 0 Inter Miami",
    partido2: "Barcelona 1 - 0 Real Madrid",
    partido3: "Barcelona 2 - 2 Juventus",
    partido4: "Barcelona 2 - 0 RedBulls"
};

alert(resultadosBarcelona.partido1);
alert(resultadosBarcelona["partido2"]);
alert(resultadosBarcelona.partido3);
alert(resultadosBarcelona["partido4"]);

function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){alert("Hola soy: " + this.nombre)};
    this.datos = function(){alert("Mis datos de edad y dirección son: " + this.edad + " años "+ " y " + this.calle)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

persona1.hablar();
persona2.hablar();
persona1.datos();
persona2.datos();

const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
alert("nombre" in persona1);
alert("origen" in persona1);

for(const propiedades in persona1){
    alert(persona1[propiedades]);
}

const numeros = [1,2,3,4,5];
alert(numeros[0]);
alert(numeros[3]);
let resultado = numeros[1] + numeros[4];
alert(resultado);

const numeros = [-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8];
for (let index = 0; index < 15; index++){
    alert(numeros[index]);
}

*/

const numeros = [1,20,30,40,50,60,70,80,90]

for (let i=0; i < numeros.length; i++){
    alert(numeros[i]);
}