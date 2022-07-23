
/*function datos(maximo_calorias, entrada, consumo){
    this.maximo_calorias = maximo_calorias;
    this.entrada = entrada;
    this.consumo = consumo

    while (entrada.toUpperCase() != "ESC") {
        let alimento = prompt("Ingrese el Nombre del Alimento:");
        console.log("Nombre: " + alimento);
        let calorias = parseFloat(prompt("Ingrese las Calorías del Alimento Consumido:"));
        console.log("Calorías: " + calorias);//1950
        consumo += calorias;

        if (consumo > maximo_calorias) {
            alert("Superaste el consumo máximo de tu plan alimenticio!");
            alert("Tus calorías consumidas son: " + consumo);
            break;
        }
    }
}

const miscalorias = new datos (parseFloat(prompt("Ingrese el límite de calorías de tu plan alimenticio:"), "", 0));
console.log(miscalorias);*/

/*
let numeroA = 5;
let numeroB = 10;
const NUMEROC = 3;

let suma = numeroA + numeroB;
alert (suma);

let resta = numeroB - numeroA;
alert (resta);

let multiplicacion = numeroA * numeroB;
alert (multiplicacion); 

let division = numeroB / numeroA;
alert (division);

const suma = numeroA + numeroB;
alert (suma);

const resta = numeroB - numeroA;
alert (resta);

const multiplicacion = numeroB * numeroA;
alert (multiplicacion);

const division = numeroB / numeroA;
alert (division);

const division = numeroA / numeroB;
alert (division);

let multiplicacion = numeroB * numeroA * NUMEROC;
alert (multiplicacion);*/

/*let textoA = "CODER";
let textoB = "HOUSE";
const BLANCO = " ";

let resultadoA = textoA + BLANCO + textoB;
alert (resultadoA);

let resultadoB = textoB + 41;
alert (resultadoB);

let resultadoC = textoA + 41;
console.log (resultadoC);

let nombreIngresado = prompt ("Ingrese su nombre");
alert (nombreIngresado);

const nombreIngresado = prompt ("Ingrese su nomre:")
alert (nombreIngresado);

console.log ("Mensaje de prueba");

let nombre = "Erich";
console.log (nombre);

let entrada = prompt("Ingrese una letra:");
let salida = ("Tu letra ingresada es:" + " " + entrada);
alert(salida);

let creditoDisponible = prompt("Ingresa tu credito disponible:");
let dineroDisponible = prompt("Inresa tu dinero dispobible");

const resta = (creditoDisponible - dineroDisponible);
alert (`El credito no puede disminuir por la cantidad de: \$${resta} pesos.`);

if (true) {
    console.log("vas a ver éste mensaje");
}

if (false) {
    console.log("no vas a ver éste segundo mensaje");
}


let unNumero = 5;
let unNumero1 = 6;

if (unNumero == 5){
    alert ("vas a ver éste mensaje");
}

if (unNumero1 == 6){
    alert ("no vas a ver éste mensaje");
}


let unColor = "Verde";

if (unColor == "Rojo") {
    alert("El color es rojo");
}else {
    alert("El color no es rojo");
} 

let nombreUsuario = prompt("Ingresa tu nombre de usuario:");

if (nombreUsuario == ""){
    alert("No ingresaste ningún nombre de usuario!");
    alert("Ingresalo por favor no piss off with me!!!");
}else {
    alert("Nombre de usuario ingresado:" + nombreUsuario);
}

alert("EL CLÁSICO: BARCELONA VS REAL MADRID!!");
let nombreEquipo = prompt("Ingresa el nombre del Equipo que gana el partido:");

if (nombreEquipo == ""){
    alert("No ingresaste ningún equipo, no seas pecho frío!!")
}else {
    alert("El equipo que tus pronosticos le dan el triunfo es: " + nombreEquipo);
}

let edad = 40;

if (edad <= 15){
    alert("La edad es menor o igual de 15 años");
}else if (edad <= 25){
    alert("La edad es menor o igual de 25 años");
}else if(edad <= 40){
    alert("La edad es menor o igual de 40 años");
}else if(edad <= 60){
    alert("La edad es menor o igual de 60 años");
}else{
    alert("La edad es mayor de 60 años");
}

let numero = 0;
let esMayor = (numero >= 0);

if(esMayor){
    alert("Es boolean TRUE");
}else {
    alert("Es bolean FALSE");
}

let nombreIngresado = prompt("Ingrese su nombre: ");
let apellidoIngresado = prompt("Ingrese su apellido: ");

if((nombreIngresado != "") && (apellidoIngresado != "")){
    alert("El nombre ingresado es: " + nombreIngresado + "\nEl apellido ingresado es: " + apellidoIngresado);
}else{
    alert("Error: Ingresar nombre y apellido");
}*/

let nombreIngresado = prompt("Ingresar nombre:");

if((nombreIngresado == "DIOS") || (nombreIngresado == "Dios")){
    alert("El nombre ingresado es: Dios");
}else {
    alert("El nombre ingresado no es el correcto!!");
}




