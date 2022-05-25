/* Richiesta Snack3
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

/* ------------------------------------------------------------- */

// Recupero gli elementi dal dom
let inputResultElement = document.querySelector("#inputResult");

// Creo una variabile per la somma
let numSum = 0;

// Ciclo per richiedere i numeri all'utente
let i = 0;
while (i < 5) {

    // Chiedo un numero all'utente
    let inputNum = parseInt(prompt("Inserisci un numero"));

    // Controllo che l'input sia un numero
    if (isNaN(inputNum)) {
        alert("Per favore, riprova inserendo un numero valido.");
    } else {
        // Sommo il numero inserito
        numSum += inputNum;
    
        // Aggiungo una iterazione al conteggio
        i++
    }

}

// Stampo la somma finale dei numeri
inputResultElement.innerHTML = `La somma dei numeri inseriti è ${numSum}.`