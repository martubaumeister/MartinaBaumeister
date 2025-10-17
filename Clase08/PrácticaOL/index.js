let misDatos = {
    nombre: "Martina",
    apellido: "Baumeister",
    dni: 47432873,
    comidasFavoritas: ["Fideos", "Tacos", "Pizza"] ,
    saludar: function() {
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo EDAD años. Mi primer comida favorita es " + this.comidasFavoritas[0] + "."
    }
}
console.log(misDatos.saludar())

let auto = {
    marca: "Toyota",
    modelo: "Yaris", 
    anio: 2025 , 
    color: "blanco", 
    posicion: [0,] , 
    avanzar: function(numero){
        return this.posicion = this.posicion + numero
    } ,
    retroceder: function(numero){
        return this.posicion = this.posicion - numero
    }
}

auto.avanzar(10);
auto.retroceder(2);
auto.avanzar(4);

console.log(auto.posicion)

let nuevoAuto =  {
    marca: "Toyota",
    modelo: "Yaris", 
    anio: 2025 , 
    color: "blanco", 
    posicion: [0,] , 
    moverse: function(numero){
        return this.posicion = this.posicion + numero
    } 
}

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar Misiles", "Disparar Laser"], 
    energia: 100 ,
    getPoder: function(n){
        this.energia = this.energia - 10
        return "Poder Elegido de " + this.nombre + this.poderes[n] + " Energía restante: " + this.energia + "."
    }
}
let Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar ", " Golpear"], 
    energia: 100 ,
    getPoder: function(n){
        this.energia = this.energia - 10
        return "Poder Elegido de " + this.nombre + this.poderes[n] + " Energia restante: " + this.energia + "."
    }
}
console.log(ironMan.getPoder(0))
console.log(Hulk.getPoder(2))
console.log(ironMan.getPoder(1))
console.log(Hulk.getPoder(0))

console.log(Hulk.energia)
console.log(ironMan.energia)