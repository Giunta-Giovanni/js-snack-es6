/* 
<!-- Snack 3 (Bonus) -->
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
*/

// array di numeri
const numeri = [ 
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];

// variabile di un numero minimo casuale da inserire nel range
const a = generaRandomNumberRange(1, 10);

// variabile di un numero massimo casuale da inserire nel range
const b = generaRandomNumberRange(11,20);

// stampa il risultato
console.log(`Array di numeri da ${a} a ${b}`);
console.log(numbersInRange(numeri, a, b));



// FUNCTION 
// Funzione per ottenere numeri in un determinato range
function numbersInRange (arrayOfNumbers, min, max){
    // mi salvo l'array numeri in un range inizialmente vuoto
    const rangeNumbers = [];
    // ciclo l'array da controllare
    for (let i = 0; i < arrayOfNumbers.length; i++){
        // mi salvo l'elemento iesimo
        number = arrayOfNumbers[i];
        // se il numero è maggiore del valore minimo e minore di quello massimo
        if (number > min && number < max){
            // inserisco il numero nell'array numeri in un range
            rangeNumbers.push(number);
        }
    }
    // in uscita mi ritorno 'array riempito
    return rangeNumbers
}

// funzione per generare numeri casuali in un range
function generaRandomNumberRange(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min)
}
