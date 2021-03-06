//debug

console.log('JS OK!')

/* Consegna:

Scrivi un programma che stampi in console i numeri da 1 a 100.

MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli 
di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la 
stringa corretta.

MILESTONE 3
Applica uno stile differente a seconda del valore dell'indice per i 
multipli di 3, per i multipli di 5 e per i valori che sono sia multipli 
di 3 che di 5.
*/

const bigSquare = document.querySelector("#container");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        let element = `<div class="square">${'FizzBuzz'}</div>`;
        bigSquare.innerHTML += element;

    } else if (i % 3 === 0) {
        console.log("Fizz");
        let element = `<div class="square">${'Fizz'}</div>`;
        bigSquare.innerHTML += element;

    } else if (i % 5 === 0) {
        console.log("Buzz");
        let element = `<div class="square">${'Buzz'}</div>`;
        bigSquare.innerHTML += element;

    } else {
        console.log(i);
        let element = `<div class="square">${i}</div>`;
        bigSquare.innerHTML += element;
    }
}