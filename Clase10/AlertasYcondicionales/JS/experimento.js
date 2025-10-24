let nombre = prompt("Ingrese su nombre: ")
console.log(nombre)
let edad = prompt("Ingrese su edad: ")
console.log(edad)
let fanDeportes = confirm("Le gustan los deportes?")
console.log(fanDeportes)
alert("Muchas gracias " + nombre + " por responder nuestras preguntas.")



let usuario ={
    nombre: nombre, 
    edad: edad, 
    fanDeportes: fanDeportes,
    deportistaProfesional:function() {
        if (fanDeportes == true){
            console.log("Si, soy fan de los deportes.")
        }
        else{
            console.log("No soy tan fan aún de los deportes")
        }
    }
}