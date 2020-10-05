// EXERCÍCIO 1 - Semana4 - aula13

function minhaFuncao(variavel) {
	return variavel * 5
}
// a. O que vai ser impresso no console?
console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50

// b. O que aconteceria se retirasse os dois console.log e simplesmente 
//invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// Retorna nada pois para imprimir um valor precisamos usar console.log()


// EXERCÍCIO 2

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)

// a. Explicite quais são as saídas impressas no console
// Darvas e Caio, pois ambos estao nos indices 0 e 1 que sao menores que 2

// b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
// Amanda e Caio


// EXERCÍCIO 3

const metodo = (array) => {
let arrayFinal = [];

	for (let x of array) {
		if (x % 2 === 0) {
			arrayFinal.push(x * x)
		}
	}

	return arrayFinal;
}


// EXERCÍCIO 4

const minhaInfo = () => {
	return 'Eu sou Wdson, tenho 25 anos, moro em São Luís e sou estudante. '
}
console.log(minhaInfo())