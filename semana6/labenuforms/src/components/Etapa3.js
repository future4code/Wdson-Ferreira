import React from 'react';

class Etapa3 extends React.Component {
    render () {
        return (
            <div className="App">
                <div>
                    <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                </div>
                <div>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input></input>
                </div>
                <div>
                    <p>6. Você fez algum curso complementar?</p>
                    <select>
                        <option value="nenhum">Nenhum</option>
                        <option value="curso tecnico">Curso técnico</option>
                        <option value="curso de ingles">Curso de inglês</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Etapa3;