// Exercicios de interpretacao de codigo

//      Exercicio 1
// -- O que o codigo abaixo está fazendo? 
// Res - incrementando valores de 1 em 1 ate que seja menor que 5.
// -- Qual o resultado impresso no console?
// Res - 5

let valor = 0
for(let i = 0; i < 5; i++){
    valor += 1
}
console.log(valor)

//      Exercicio 2
// -- a. O que vai ser impresso no console?
// Res - Os numeros maiores que 18 (19, 21, 23, 25, 27, 30)
// -- b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Res - não 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
		console.log(numero)
    }
   
}



// Exercícios de escrita de código
//      Exercicio 3
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
console.log(arrayOriginal)
for(let valores of arrayOriginal){
    console.log(valores / 10)
}
 
let numerosPares = []
for(let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] % 2 === 0){
        numerosPares.push(arrayOriginal[i])
    }
}
console.log(numerosPares)