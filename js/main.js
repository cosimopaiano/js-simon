// verifica corretto import script
console.log('me js is here');
// Simon Says
// Un alert espone 5 numeri casuali (univoci).
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
// Assicuratevi di saper fare correttamente l’ esercizio con output base (alert() , prompt() , console.log() )

//creazione variabili
var numRandom = [];
var numUtente = [];
var sceltaUtente;

// creazione numeri random ed univoci
for (var i = 0; numRandom.length < 5; i++) {

  var numero = getRandomNumber(1, 100)

  if (!numRandom.includes(numero)) {
    numRandom.push(numero)
  }
}

alert('Vediamo se ricordi questi numeri tra 30 secondi: ' +numRandom)
console.log(numRandom);


// focus esercizio, uso delle time function
setTimeout(function () {

  for (var i = 0; numUtente.length < 5; i++) {
    sceltaUtente = parseInt(prompt('Inserisci un numero'));
    //verifica per non far inserire numeri uguali
    if (!numUtente.includes(+sceltaUtente))
      numUtente.push(+sceltaUtente);
    else {
      alert('Non puoi inserire due volte lo stesso numero')
    }
  }

  var numVincenti = [];

  // ciclo per eventuali numeri vincenti
  for (var i = 0; i < numRandom.length; i++) {
    var vittoria = numUtente[i];

    if (numRandom.includes(vittoria)) {
        numVincenti.push(vittoria)
    }
  }

  alert('I numeri da ricordare erano: ' + numRandom)
  alert('Hai ricordato questi numeri: ' + numVincenti  + '\nIl tuo punteggio è: ' + numVincenti.length )


}, 30000); 



// Function per generare numeri random
function getRandomNumber(min, max) {
  var random = Math.floor(Math.random()* max - min + 1) + min;
  return random
}
