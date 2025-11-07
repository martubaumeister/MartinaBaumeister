let queryString = location.search;
let objQueryString = new URLSearchParams(queryString); 

let resultado = objQueryString.get("id");

console.log(resultado);

fetch(`https://rickandmortyapi.com/api/character/${resultado}`)
.then(function (res) {
    return res.json()
})
.then(function(datos){
    console.log(datos); 
    let titulo = document.querySelector(".titulo");
    let parrafo1 = document.querySelector(".parrafo1");
    let parrafo2 = document.querySelector(".parrafo2");
    let imagen = document.querySelector(".imagen");

    titulo.innerText = datos.name;
    parrafo1.innerText = `Status: ${datos.status}`;
    parrafo2.innerText = `Specie: ${datos.species}`;
    imagen.src = datos.image;


})
.catch(function(error){
    console.log(error)
})