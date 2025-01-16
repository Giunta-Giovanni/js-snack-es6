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

// tramite funzione genero dei numeri randomici

// salvo all'esterno l'array vuoto chiamato falli squadre
// creo un ciclo per iterare le singole squadre
    // modifico il valore delle proprietà inserendogli all'interno dei numeri randomici
    // mi prendo per ogni squadra la proprieta nome e falli subiti
    // pusho all'interno dell'array solo il nome della squadra e i falli subiti

