/* Richiesta Snack4
In un array sono contenuti i nomi degli invitati alla festa
del grande Gatsby, chiedi all’utente il suo nome e comunicagli
se può partecipare o no alla festa. Interrompi il ciclo
appena il nome è stato trovato. */

/* ------------------------------------------------------------- */

// Recupero gli elementi dal dom
let finalResultElement = document.querySelector("#finalResult");

// Creo un array con i nomi degli invitati
let guestList = [
    "Marty McFly",
    "Emmett Brown",
    "Lorraine Baines",
    "George McFly",
    "Biff Tannen",
    "Einstein"
];

// Creo una variabile per l'input dell'utente
let userInput = "";

// Creo una variabile per terminare il ciclo
let stopCycle = false;

// Ciclo per richiedere il nome all'utente
while (stopCycle == false) {

    // Chiedo all'utente di inserire il nome
    userInput = prompt("Inserisci il tuo nome e verificheremo che tu sia invitato alla festa.")

    // Controllo se è presente nei nomi dell'array
    for (i = 0; i < guestList.length; i++) {

        // Se il nome è presente
        if (userInput === guestList[i]) {

            // Cambio la variabile per stoppare il ciclo
            stopCycle = true;

            // Stampo un messaggio di benvenuto
            finalResultElement.innerHTML = `Ciao ${userInput}, benvenuto alla festa!`

        }

    }

}