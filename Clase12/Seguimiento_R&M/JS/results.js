let resultados = document.querySelector(".search-results")

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let atributo = queryStringObj.get("q");

fetch(`https://rickandmortyapi.com/api/character/?name=${atributo}`)
.then(function(results){
    return results.json()
})
.then(function(data){
    let characters = "" ;
    for(let i=0; i<data.results.length; i++){
    characters = characters + `<article class="personaje">
        <img src=${data.results[i].image} alt='Imagen '>
        <a href="./detalle.html?id=${data.results[i].id}" class="a">Name:${data.results[i].name} </a>
        <p>Status:${data.results[i].status} </p>
        </article>`
 }
    resultados.innerHTML = characters

})
.catch(function(error){
    console.log(error)
})
