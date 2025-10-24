let numero1 = prompt("Ingrese un numero: ")
let numero2 = prompt("Ingrese otro numero: ")

function multiplicar(numero1, numero2){
    let resultado = numero1* numero2
    return ("El resultado de multiplicar " + numero1 + " y " + numero2 + " es: " + resultado )
}
console.log(multiplicar(numero1, numero2))
