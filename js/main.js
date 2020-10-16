
/*SNACK 1 - L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/


/*var num1 = parseInt( prompt('Inserisci il primo numero') );
console.log (typeof(num1));
var num2 = parseInt( prompt('Inserisci il secondo numero') );
console.log (typeof(num2));

if (num1 > num2) {
 console.log('il primo numero ' + num1 + 'è maggiore');
}

if (num2 > num1) {
 console.log('il secondo numero ' + num2 + 'è maggiore');
}*/

/**
**/

/*SNACK 2 - L’utente inserisce due parole in successione, con due prompt.
Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.*/

/*var word1 = prompt('Inserisci la prima parola');
var word2 = prompt('Inserisci la seconda parola');

if (word1.length > word2.length) {
console.log(word2 + ' ' + word1);

} else if (word2.length > word1.length) {
console.log(word1 + ' ' + word2);
} else {
  console.log('Le due parole sono lunghe uguali');
}*/

/**
**/

/*SNACK 3  - Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma con il for.*/

/*var somma = 0;
for (var i = 0; i < 5; i++) {
var number = parseInt( prompt('Inserire un numero:') );
somma = somma + number;
}
console.log(somma);*/


/*SNACK 4  - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo)
 Chiedi all’utente il suo nome
 Comunicagli se può partecipare o no alla festa.
**/

/*var invitatiFesta = ['paolo', 'fabio', 'lorenzo'];
var quantiInvitati = invitatiFesta.length;
var user = prompt('Inserisci il tuo nome:').toLowerCase();
var userVer = false;

for (var i = 0; i < quantiInvitati; i++) {
if (user == invitatiFesta[i]) {
    userVer = true;
  }
 }

 if (userVer == true) {
    console.log('Puoi partecipare alla Festa!');
 } else {
    console.log('Non puoi partecipare alla Festa!');
 }*/

 /*SNACK 5  - Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero
 Se è dispari inseriscilo nell’array
 **/

var emptyArray = [];

for (var i = 0; i <6; i++) {
  var numero = parseInt(prompt('Inserisci un numero'));

  if (numero % 2 !=0) {
    emptyArray.push(numero);
  }
}

console.log(emptyArray);
