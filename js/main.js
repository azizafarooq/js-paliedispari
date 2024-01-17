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
    console.log(parolaUtente + " è una parola palindroma!");
} else {
    console.log(parolaUtente + " non è una parola palindroma.");
}
