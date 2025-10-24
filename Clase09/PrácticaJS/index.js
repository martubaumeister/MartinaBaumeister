function rectangulo(altura, ancho){
    return altura * ancho
}
let resultado = rectangulo(4, 2); 
console.log(resultado)

function triangulo(base,altura){
    return ((base * altura) / 2) 
}
let resultado2= triangulo(5, 2);
console.log(resultado2)

function dolarHoy(precio_pesos){
    return precio_pesos/1350
}
let dolar= dolarHoy(200000);
console.log(dolar)

function precioFinal(precio){
    return precio + (precio*0.21)
}
let precio = precioFinal(1000);
console.log(precio)

function mitad(numero){
    return numero/2
}
let numeroI = mitad(8);
console.log(numeroI)

function calculadora(num1, num2, operacion){

}
function sumar(num1, num2){
    return num1 + num2   
}
function multiplicar(num1, num2){
    return num1 * num2
}
function restar(num1, num2){
    return num1 - num2
}
function dividir(num1, num2){
    return num1 / num2
}

let calculo = sumar(1,1)
let calculo1 = dividir(calculo, 2)
console.log(calculo, calculo1)

function siguiente(numero) {
  return numero + 1;
}
let ejecucion1= siguiente(4);
console.log(ejecucion1)

function doble(numero) {
  return 2 * numero;
}
let ejecucion2 = doble(2)
console.log(ejecucion2)

function siguienteDelDoble(numero) {
   return siguiente(doble(numero));
}
let ejecucion3 = siguienteDelDoble(6);
console.log(ejecucion3)

function anterior(numero){
    return numero - 1
}
let ant = anterior(4);
console.log(ant)

function triple(numero){
    return numero * 3
}
let trip= triple(4);
console.log(trip)

function anteriorDelTriple(numero){
    return anterior(triple(numero))
}
let antTrip= anteriorDelTriple(4);
console.log(antTrip)