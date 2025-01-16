/* 
Snack 1 
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
*/

// creo un array di oggetti bidimensionale con proprieta nome e peso e i loro valori
const bici = [
    { nome: "Mountain King", peso: 14.5 },
    { nome: "Road Runner", peso: 9.8 },
    { nome: "Trail Blazer", peso: 12.2 },
    { nome: "Speedster", peso: 8.9 },
    { nome: "Urban Commuter", peso: 11.3 },
    { nome: "Gravel Explorer", peso: 10.7 },
    { nome: "CycloCross Pro", peso: 10.1 },
    { nome: "Fat Tire Beast", peso: 15.8 },
    { nome: "Hybrid Comfort", peso: 12.6 },
    { nome: "Electric Glide", peso: 18.5 }
  ];

  console.table(bici);
  
// creo un ciclo di tutti gli oggetti
    // mi salvo la proprietà peso e creo una condizione
    // se il valore tra quelli che abbiamo è il piu piccolo
        //stampamelo a schermo
