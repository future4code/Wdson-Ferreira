
Exercícios de interpretação de código
1)

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // true

console.log("e. ", typeof resultado) // boolean


// 2)

let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 33

array[i+1] = 19
console.log('e. ', array) // (11) [3,19,5,6,7,8,9,10,11,12,13]

const valor = array[i+6]
console.log('f. ', valor) // 9


// Exercicios de escrita de código 

// 1)

let userAge = prompt('Qual é a sua idade? ');
let friendAge = prompt('Qual é a idade do seu melhor amigo(a)? ');

console.log('Sua idade é maior do que a do seu melhor amigo(a)? ',
Number(userAge) > Number(friendAge), ' e a diferença de idade é: ',
Number(userAge) - Number(friendAge), 'anos');

// 2)

let evenNumber = prompt('Insira um numero par: '); // todos numeros pares retornam 0
console.log(Number(evenNumber) % 2); // todos numeros ímpares retornam 1


// 3

let listaDeTarefas = [];
let firstQuestion = prompt('Digite uma tarefa do dia');
let secondQuestion = prompt('Digite outra tarefa do dia');
let thirdQuestion = prompt('Digite outra tarefa do dia');


