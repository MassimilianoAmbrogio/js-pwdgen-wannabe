// Parte js

//Parte 1
var userName = prompt('Quale è il tuo nome?');

console.log('Nome User: ', userName);

document.getElementById('name').innerHTML = userName;

//Parte 2
var lastName = prompt('Quale è il tuo cognome?');

console.log('Cognome User: ', lastName);

document.getElementById('lastName').innerHTML = lastName;

// Parte 3
var color = prompt('Quale è il tuo colore preferito?');

console.log('Colore preferito: ', color);

document.getElementById('color').innerHTML = color + ' 19';
