/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo ao jogo de Blackjack!')
let perguntaInicial = confirm('Quer iniciar uma nova rodada? ')

if(perguntaInicial === true) {
   console.log('Iniciando uma nova rodada')
} else {
   console.log('O jogo acabou')
}

const usuario = comprarCarta();
   
   console.log(usuario.texto)
   console.log(usuario.valor)

const computador = comprarCarta();
   console.log(computador.texto)
   console.log(computador.valor)
   let somaUsuario = (usuario.texto + computador.texto)
   let usarioComputador = (usuario.valor + computador.valor)

console.log(`Usuário - cartas: ${usuario.texto} | ${computador.texto} - pontuação ${somaUsuario}
Computador - cartas: ${usuario.valor} | ${computador.valor}  - pontucao  ${usarioComputador}`)
