let form = document.querySelector(".contact-form");
console.log(form)

let nombre = document.querySelector("#fullName");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let contraseña = document.querySelector("#password");
let recontraseña = document.querySelector("#rePassword");

let errorNombre = document.querySelector(".fullName");
let errorEmail = document.querySelector(".email");
let errorPhone = document.querySelector(".phone");
let errorContraseña = document.querySelector(".password");
let errorRecontraseña = document.querySelector(".rePassword");

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    let error = false; 

    if(nombre.value == ""){
        errorNombre.innerText = "Este campo no puede estar vacío";
        errorNombre.style.display = "block"; 
        error = true; 
    }
    if(email.value == ""){
        errorEmail.innerText = "Este campo no puede estar vacío";
        errorEmail.style.display = "block"; 
        error = true; 
    }
    if(phone.value == ""){
        errorPhone.innerText = "Este campo no puede estar vacío";
        errorPhone.style.display = "block"; 
        error = true; 
    }
    if(phone.value.length < 8){
        errorPhone.innerText = "El telefono debe tener al menos 8 dígitos"
        errorPhone.style.display = "block"; 
        error = true; 
    }
    if(contraseña.value == ""){
        errorContraseña.innerText = "Este campo no puede estar vacío";
        errorContraseña.style.display = "block"; 
        error = true; 
    }
    if(contraseña.value.length < 4){
        errorContraseña.innerText = "La contraseña debe tener mas de 3 caracteres"
        errorContraseña.style.display = "block";
        error = true; 
    }
    if(recontraseña.value == ""){
        errorRecontraseña.innerText = "Este campo no puede estar vacío";
        errorRecontraseña.style.display = "block";
        error = true; 
    }
    if(contraseña.value != recontraseña.value){
        errorRecontraseña.innerText ="Las contraseñas ingresadas no coinciden"
        errorRecontraseña.style.display = "block";
        error = true;    
    }

    if(error == false){
        this.submit();
    }
}); 

