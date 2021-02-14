// Parte js

// Ottenere dati richiesti
var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var colore = prompt('Inserisci il tuo colore preferito?');

// Costruzione password
var password = nome + cognome + colore + '19';
console.log(password);

// Output
document.getElementById('password').innerHTML = 'La tua password è: ' + password;
