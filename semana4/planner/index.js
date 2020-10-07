function adicionaTarefa() {
	const minhaTarefa = document.getElementById("tarefa")

	const diasDaSemana = document.getElementById("dias-semana").value
	const minhaLista = document.getElementById(diasDaSemana)

	if (minhaTarefa !== "") {

		minhaLista.innerHTML += `<li> ${minhaTarefa.value} </li>`
		
	}

	minhaTarefa.value = ""
	console.log(diasDaSemana)
}