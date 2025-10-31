fetch("https://rickandmortyapi.com/api/character")
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let personajes = document.querySelector(".character-list"); 
  let characters = "" ;
  for(let i=0; i<data.results.length; i++){
    characters = characters + `<article class="personaje">
        <img src=${data.results[i].image} alt='Imagen '>
        <p>Name:${data.results[i].name} </p>
        <p>Status:${data.results[i].status} </p>
        </article>`
 }
personajes.innerHTML = characters
})
.catch(function(error) {
  console.log("Error: " + error);
})
