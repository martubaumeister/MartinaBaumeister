let nacionalidad = prompt("Ingrese su nacionalidad")
let profesion = prompt("Ingrese su profesión")
let kmsRecorridos = prompt("Cuantos km camina por dia?")


function filosofoHipster(nacionalidad, profesion, kmsRecorridos){
    if ((nacionalidad === "argentina") && (profesion === "filosofo") && (kmsRecorridos >= 2)){
            return ("Soy un filosofo hipster")
    }
    else{
        return ("Aun no soy filosofo hipster")
    }
}

console.log(filosofoHipster(nacionalidad, profesion, kmsRecorridos))
 