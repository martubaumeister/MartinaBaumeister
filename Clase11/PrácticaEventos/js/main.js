// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");
    titulo.addEventListener('mouseover', function(){
    let nombre = prompt("¿CÓMO TE LLAMÁS?")
    let saludo = document.querySelector("#saludo");
    if (nombre === ""){
        saludo.innerText = "Bienvenid@" ;
    }
    else{
        saludo.innerText = 'Bienvenid@ ' + nombre ;
    }
    saludo.style.textTransform = 'uppercase' ;
    titulo.style.display = 'none' ;
    let span =document.querySelector(".bienvenida span");
        span.style.display = 'block' ;
    })
    let boton = document.querySelector("span");
    boton.addEventListener('click', function(){
        let bienvenida = document.querySelector(".bienvenida");
        bienvenida.style.display = 'none'
        let personajes = document.querySelector(".personajes");
        personajes.style.display = 'flex'
    })
    let bart = document.querySelector("#bart");
    let lisa = document.querySelector("#lisa");
    let homero = document.querySelector("#homero");
    let marge = document.querySelector("#marge");
    let maggie = document.querySelector("#maggie");
    let milhouse = document.querySelector("#milhouse");
    let burns = document.querySelector("#burns");
    let bobPatinio = document.querySelector("#bobPatinio");
    let flanders = document.querySelector("#flanders");
    let duffman = document.querySelector("#duffman");
    let gorgory = document.querySelector("#gorgory");
    let nelson = document.querySelector("#nelson");

    let select = this.document.querySelector(".personaje-seleccionado")

    bart.addEventListener('click', function(){
    })
    lisa.addEventListener('dblclick', function(){
    })
    homero.addEventListener('click', function(){  
    })
    marge.addEventListener('mouseover', function(){
    })
    maggie.addEventListener('mouseout', function(){
    })
    milhouse.addEventListener('click', function(){
    })
    burns.addEventListener('mouseover', function(){
    })
    bobPatinio.addEventListener('dblclick', function(){
    })
    flanders.addEventListener('mouseover', function(){
    })
    duffman.addEventListener('dblclick', function(){
    })
    gorgory.addEventListener('mouseover', function(){
    })
    nelson.addEventListener('click', function(){
    })
})