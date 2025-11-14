let miNombre = "Martina";
localStorage.setItem('userName', miNombre);
console.log(localStorage);

let recuperoStorage = localStorage.getItem('userName');
console.log(recuperoStorage);
localStorage.clear();

let peliculasFavoritas = ["El rey leon", "The parent trap", "Lemonade Mouth"];
localStorage.setItem('peliculaFavorita', peliculasFavoritas[1]);
console.log(localStorage);
let recuperoStorage2 = localStorage.getItem('peliculaFavorita');
console.log(recuperoStorage2);
localStorage.clear();

let peliculasJson = JSON.stringify(peliculasFavoritas);
localStorage.setItem('favoritos', peliculasJson);
console.log(localStorage);

let recuperoStorage3 = localStorage.getItem('favoritos');
let peliculasOG = JSON.parse(recuperoStorage3);
peliculasOG.push("La bella y la bestia"); 
JSON.stringify(peliculasOG)
localStorage.setItem('favoritos', peliculasOG);
console.log(localStorage)
