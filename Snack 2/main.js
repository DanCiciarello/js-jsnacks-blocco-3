/* Richiesta Snack2 
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo. */

/* ------------------------------------------------------------- */

// Recupero gli elementi html
let userInputElement = document.querySelector("#userInput");
let generateBtnElement = document.querySelector("#generateBtn");
let printArrayElement = document.querySelector("#printArray");

// Creo un event listener per il bottone Genera
generateBtnElement.addEventListener("click", function(){

    // Resetto i numeri precedenti
    printArrayElement.innerHTML = "";

    // Recupero l'input dell'utente
    let userInput = parseInt(userInputElement.value);

    // Ciclo in base al numero inserito dall'utente
    for (i = 0; i < userInput; i++) {

        // Creo un array vuoto
        let numsList = [];

        // Popolo l'array con 10 elementi
        for (y = 0; y < 10; y++) {

            // Genero un numero casuale da 1 a 100
            let randomNum = Math.floor(Math.random() * 100) + 1;

            // Aggiungo il numero all'array
            numsList.push(randomNum);

        }

        // Stampo l'array
        printArrayElement.innerHTML += `${numsList.join(" - ")}<br>`

    }

});