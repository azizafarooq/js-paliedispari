# Consegna
### Palindroma
- Chiedere all'utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma
### Pari e Dispari
- L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.

# Svolgimento
### Palindroma
- Chiedo all'utente la parola tramite il prompt e la salvo nella variabile parolaUtente
- Creo una funzione per invertire la parola

      1- Assegno il nome alla funzione e l'argomento

      2- Uso il ciclo for per invertire la stringa

      3- Inserisco il return

- Creo una variabile esterna richiamando la funzione e inserendo come argomento 'parolaUtente'

- Creo una condizione:
    - Se la parolaUtente === parolaInvertita
        - Stampo "La parola è palindroma"

    - Altrimenti 
        - Stampo "La parola non è palindroma"    


### Pari e Dispari
- Chiedo all'utente pari o dispari con un prompt
- Chiedo all'utente un numero da 1 a 5
- Uso la funzione per generare un numero random
- Sommo il numero dell'utente a quello del computer
- Creo una funzione per capire se la somma è pari o dispari
- Creo una condizione per stabilire il vincitore