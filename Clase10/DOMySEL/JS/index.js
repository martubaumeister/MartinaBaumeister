alert("Bienvenidos a mi sitio.");
let avanzar = confirm("Esta seguro de querer avanzar?");
if (avanzar == true){
    document.querySelector(".saludo").innerText = "Que alegría que quieras continuar con tu visita.";
    let nombre = prompt("Ingrese su nombre");
    document.querySelector("h1").innerText = ("Bienvenido " + nombre );
    let edad = prompt("¿Cuantos años tenés?");
    if (edad >= 17){
        let programa = confirm("Te gusta la programación?");
        if (programa == false){
            let background = document.querySelector(".background-img").innerHTML = "<img src='./img/gatito.jpeg'>" ; 
        }
        else{
            let background = document.querySelector(".background-img").innerHTML = "<img src='./img/programmer.jpeg'>" ; 
            }
            let img = prompt("Ruta de la imagen: ");
            let avatar = document.querySelector(".avatar"); 
            avatar.src = img ;

            let pelicula = {
                nombre: "",
                director: "",
                duracion: 0,
                actor: "",
            }
            pelicula.nombre = prompt("Ingrese el nombre de la pelicula: ");
            pelicula.director = prompt("Ingrese el director de la pelicula: ");
            pelicula.duracion = prompt("Ingrese la duración de la peliucla: ");
            pelicula.actor = prompt("Ingrese el actor de la pelicula: ");

            document.querySelector("#nombre").innerText = "Nombre: " + pelicula.nombre ; 
            document.querySelector("#director").innerText = "Director: " + pelicula.director ; 
            document.querySelector("#duracion").innerText = "Duracion: " + pelicula.duracion ; 
            document.querySelector("#actor").innerText = "Actor: " + pelicula.actor ; 

            let lista = document.querySelector("#pelicula"); 
            lista.style.display = "block" ; 
        }
else{
    let container = document.querySelector(".container-general");
    container.style.display = "none";         
    let denegado = document.querySelector("#accesoDenegado");
        denegado.style.display = "block";
    }
}
else{
        document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar con tu visita."
}