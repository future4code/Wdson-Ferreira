/*
let name;
let age;

console.log(typeof name); // undefined , pq não tem valor definido.
console.log(typeof age); // undefined 

name = prompt('Qual é o seu nome? ');
age = prompt('Qual é a sua idade? ');

console.log(typeof name); // Tipo string.
console.log(typeof age); // O prompt mesmo usando um valor do tipo number ele imprime string.

console.log('Olá ' + name + ' você tem ' + age + ' anos.');
*/


let myColor = prompt('Qual a sua cor preferida? ');
let myAdress = prompt('Qual é o seu endereço? ');
let myMovie = prompt('Qual é o seu filme preferido? ');
let myMusic = prompt('Qual é a sua música preferida? ');
let myBook = prompt('Qual é o seu livro preferido? ');

console.log('Qual a sua cor favorita: ' + myColor);
console.log('Qual é o seu endereço: ' + myAdress);
console.log('Qual é o seu filme preferido: ' + myMovie);
console.log('Qual é a sua música favorita: ' + myMusic);
console.log('Qual é o seu livro favorito: ' + myBook);

let myFood = ['Pizza', 'Hot dog', 'Burguer', 'Spaghetti', 'Lasanha'];
console.log(myFood);

console.log('Essas as minhas comidas preferidas: ');
console.log(myFood[0]);
console.log(myFood[1]);
console.log(myFood[2]);
console.log(myFood[3]);
console.log(myFood[4]);

foodUser = prompt('Qual a sua comida preferida : ');
myFood[1] = foodUser;
console.log(myFood);

let myQuestion = ['Você é maior de 18 anos?', 'Voce é chileno(a)', 'Você é programador(a)?'];
let myAnswers = [true, false,true];

console.log(myQuestion[0] , myAnswers[0]);
console.log(myQuestion[1] , myAnswers[1]);
console.log(myQuestion[2] , myAnswers[2]);