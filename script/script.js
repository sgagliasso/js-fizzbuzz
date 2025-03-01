/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

/*
- ciclo per stampare i numeri da 1 a 100 
- se il numero è multiplo di 3, quindi se il resto del numero diviso 3 è zero stampo "Fizz" (controllare che non sia anche divisibile per 5)
- se il numero è multiplo di 3, quindi se il resto del numero diviso 5 è zero stampo "Buzz" (controllare che non sia anche divisibile per 3)
- se è divisibile per 3 e 5 stampo "FizzBuzz"
- Altrimenti stampo il numero 
*/


for (let i = 1; i<= 100; i++){
    if (i % 3 === 0 &&  i % 5 !== 0) {
        console.log("Fizz")
    }else if (i % 5 === 0 &&  i % 3 !== 0) {
        console.log("Buzz")
    }
    else if (i % 3 === 0 && i % 5 === 0 ) {
        console.log("FizzBuzz")
    }
    else{
        console.log(i)
    }
}


// Soluzione 2:  faccio if prima sul multiplo di 3 e 5 cosi evito di controllarlo più volte 
for (let i = 1; i<= 100; i++){
    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log("FizzBuzz");
    }else if (i % 5 === 0 ) {
        console.log("Buzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}