// Exercicios de interpretacao de codigo

// 1)

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario) // Transforma o valor do tipo ... 
// string em number e a variavel numero recebe o valor da variavel respostaDoUsuario

if(numero % 2 === 0) { // Verifica se o resto da divisao da variavel numero por 2 tem resto 0
  console.log("Passou no teste.") // Entao imprime na tela Passou no teste
} else { // caso contrario
  console.log("Não passou no teste.") // Imprime nao passou no teste
}

// 2)

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. Para que serve o código acima? 
// Res - Para controle de estoque de frutas

// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// Res - O preço da fruta  Maça  é  R$  5

// Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// Res - O preço da fruta  Pêra  é  R$  5

// 3)

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a. O que a primeira linha está fazendo?
// Res - O valor digitado pelo usuario é transformado de string para number e armazenado na variovel numero

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Res - numero 10 retorna Esse numero nao passou no teste, numero -10 não retorna nada, pois não foi definida uma condição.

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Res - sim, a varivel mensagem esta dentro do escopo if , portanto retorna erro ao console que esta fora do escopo.


// Exercícios de escrita de código 

// 4)
const ageDrive = Number(prompt('Qual a sua idade? '))
if(ageDrive >= 18) {
   console.log('Voce pode dirigir')
}else {
   console.log('Voce nao pode dirigir')
}

// 5)

const studyShift = prompt('Que turno voce estuda? M - matutino,V - vespertino, N - noturno')

if(studyShift === 'M'){
    console.log('Bom Dia!')
}
if(studyShift === 'V'){
   console.log('Boa Tarde!')
} 
if(studyShift === 'N'){
   console.log('Boa Noite!')
}

// 6)

const shiftStudy = prompt('Qual turno voce estuda? M- matutino, V- Vespertino, N- noturno')
switch (shiftStudy) {
    case 'M':
        console.log('Bom Dia!')
        break;
    case 'V':
        console.log('Boa Tarde!')
        break;
    default:
        console.log('Boa Noite!')
        break;
}

// 7) 

const watchMovie = prompt('Qual o genero vao assitir ?')
const ticketPrice = Number(prompt('Qual o preco do ingresso? '))

if(watchMovie === 'Fantasia' && ticketPrice < 15){
    console.log('Bom filme!')
}else{
    console.log('Escolha outro filme :(')
}