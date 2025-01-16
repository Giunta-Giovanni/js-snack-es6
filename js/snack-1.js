/* 
Snack 1 
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
*/

// Array di oggetti bici con proprietà nome e peso
const bici = [
    { nome: "Mountain King", peso: 14.5 },
    { nome: "Road Runner", peso: 9.8 },
    { nome: "Trail Blazer", peso: 12.2 },
    { nome: "Speedster", peso: 8.9 },
    { nome: "Urban Commuter", peso: 11.3 },
    { nome: "Gravel Explorer", peso: 10.7 },
    { nome: "CycloCross Pro", peso: 8.1 },
    { nome: "Fat Tire Beast", peso: 15.8 },
    { nome: "Hybrid Comfort", peso: 12.6 },
    { nome: "Electric Glide", peso: 18.5 }
  ];

// Array per raccogliere i pesi delle bici
const pesi = [];
console.table(pesi);

// Ciclo per estrarre i pesi da ogni bici e inserirli nell'array pesi
for (let i = 0; i < bici.length; i++){
    // Mi salvo l'elemento iesimo dell'array oggetti
    const biciesima = bici[i];
    // Peso della bici corrente
    const peso = biciesima.peso;
    // Aggiungi il peso nell'array pesi
    pesi.push(peso);
}


// Calcola il peso minimo usando Math.min
const leggera = Math.min(...pesi)
console.log('Peso della bici più leggera:', leggera);

// Ciclo per trovare e stampare la bici con il peso più leggero
for (let i = 0; i < bici.length; i++){
    // Mi salvo l'elemento iesimo dell'array oggetti
    const biciesima = bici[i];
    // Confronta se il peso è quello piu leggero
    if (leggera === biciesima.peso){
        // Stampa la bici
        console.log('la bici più leggera è',biciesima);
    }

}
