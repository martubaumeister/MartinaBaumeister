let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let winterIsComing = []
for(let i=0; i<got.length; i++){
    let ciudad = got[i].ciudad
    if(ciudad === "Winterfell"){
        winterIsComing.push(got[i])
    }
};

let formatoJSON = JSON.stringify(winterIsComing);
localStorage.setItem('objeto', formatoJSON)
console.log(localStorage)