/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }
/*
il ciclo fa 5 ripetizioni partendo da 0, fermandosi a 4. 
L'errore di sintassi è nel i > 5 che deve essere i < o <= 5.
*/


// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 == 0) {
//         return num + 5;
//     }
//     return num;
// }
/**
 * la funzione fa la somma se il numero è pari, aggiunge 5 altrimenti restituisce il numero iniziale
 * nella condizione dell'IF mancava il doppio uguale
 */


// // ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
/*
* nella parentesi del for, i 3 parametri devono essere divisi dal ; e non dalla ,.
*/


// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]