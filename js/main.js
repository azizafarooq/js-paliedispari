const parolaFinale = document.getElementById('parola-finale');

// Chiedo all'utente una parola
const parolaUtente = prompt("Inserisci una parola:");
console.log(parolaUtente);

// Creo una funzione per invertire la parola
function funzioneInversione(parola) {
    
    // Creo un ciclo for per invertire la parola
    let parolaInvertita = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInvertita += parola[i];
    }

    return parolaInvertita;
}

const parolaInvertitaEsterna = funzioneInversione(parolaUtente);
console.log(parolaInvertitaEsterna);

// Creo l'istruzione if per verificare se è palindroma

if (parolaUtente === parolaInvertitaEsterna) {
    parolaFinale.innerText = parolaUtente + " è una parola palindroma!"
    console.log(parolaUtente + " è una parola palindroma!");
} else {
    parolaFinale.innerText = parolaUtente + " non è una parola palindroma."
    console.log(parolaUtente + " non è una parola palindroma.");
}

//*********************************************************************************

const risultatoFinale = document.getElementById('risultato-finale')

// Chiedo all'utente pari o dispari con un prompt
const sceltaUtente = prompt("Scegli pari o dispari:").toLowerCase();
console.log("Hai scelto " + sceltaUtente + " !")

// Chiedo all'utente un numero da 1 a 5 con un prompt
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
console.log("Il tuo numero è " + numeroUtente)

// Uso la funzione per generare un numero random per il computer
function generaNumeroRandom(){
    const numeroRandom = Math.floor(Math.random() * 5) + 1;
    return numeroRandom;
}
const numeroComputer = generaNumeroRandom();
console.log("Il numero del computer è " + numeroComputer);

// Sommo il numero dell'utente a quello del computer
const sommaNumeri = numeroUtente + numeroComputer;
console.log ("La somma è " + sommaNumeri);

// Creo una funzione per capire se la somma è pari o dispari
function divisibilePerDue (){
    const somma = sommaNumeri % 2 === 0;
    return somma;
}
const sommaPari = divisibilePerDue();

// Creo una condizione per stabilire il vincitore
if ((sceltaUtente === "pari" && sommaPari) || (sceltaUtente === "dispari" && !sommaPari)){
    risultatoFinale.innerText = "Hai vinto! Il risultato è pari:  " + sommaNumeri;
    console.log('Hai vinto!')
} else {
    risultatoFinale.innerText = "Hai vinto! Il risultato è dispari: " + sommaNumeri;
    console.log('Hai perso!')
}
