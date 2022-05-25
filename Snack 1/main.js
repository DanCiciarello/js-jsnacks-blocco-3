/* Richiesta Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire
nell’array. Continua a chiedere i numeri all’utente e a inserirli
nell’array fino a quando la somma degli elementi è minore di 50. */

/* ------------------------------------------------------------- */

// Creo un array vuoto
let numsArray = [];

// Creo una variabile per sommare i numeri
let numsSum = 0;

// Ciclo di richiesta all'utente
while (numsSum < 50) {

    // Chiedo un numero all'utente
    let numInput = parseInt(prompt("Inserisci un numero"));

    // Aggiungo il numero all'array
    numsArray.push(numInput);

    // Aggiungo il numero alla somma
    numsSum += numInput;

};