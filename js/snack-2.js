/* 
<!-- Snack2 -->
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


// Array di squadre con proprietà nome, punti fatti e falli subiti
const squadre = [
    { nome: "Leoni Rossi", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Aquilotti Blu", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Tigri Nere", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Draghi Verdi", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Falchi Gialli", puntiFatti: 0, falliSubiti: 0 }
];

// salvo all'esterno l'array vuoto chiamato falli squadre
const falliSquadre = []
// creo un ciclo per iterare le singole squadre
for(let i = 0; i < squadre.length; i++){

    // salvo gli elementi iesimi dell'array object
    let squadra = squadre[i];

    // modifico il valore della proprietà inserendogli all'interno dei numeri randomici
    squadra.puntiFatti = generaRandomNumberRange(1, 50)
    squadra.falliSubiti = generaRandomNumberRange(1, 100)

    // salvo la proprieta degli elementi iesimi 
    let nome = squadra.nome;           //Nome squadra
    let falli = squadra.falliSubiti;   //Falli subiti

    console.log('falli subiti', falli);

    // inserisco all'interno di falli squadre il nome della squadra e i falli subiti
    falliSquadre[i] = {
        nome, falli
    };
}

// console.log(falliSquadre);
console.log(falliSquadre);

// FUNCTION 
// Funzione per generare un numero randomico in un range

function generaRandomNumberRange(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min)
}