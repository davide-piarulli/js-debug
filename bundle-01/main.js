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
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
/*
* nella parentesi del for, i 3 parametri devono essere divisi dal ; e non dalla ,.
*/


// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    console.log(evenNumbers);// dovrebbe restituire [2,4,6,8]
    return evenNumbers;
}
displayEvenNumbers(); 
/**
 * let to const
 * ; dopo il contatore va rimosso
 * nella condizione dell'IF numbers deve avere indice i
 * nella condizione dell'IF bisogna rimuovere il - 1
 * nella condizione dell'IF ci devono essere 2 ==
 * ; dopo la condizione dell'IF va tolto
 * il return deve andare fuori dal FOR
 */