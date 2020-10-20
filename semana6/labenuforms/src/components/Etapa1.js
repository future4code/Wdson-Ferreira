import React from 'react';
import Etapa2 from './Etapa2'

class Etapa1 extends React.Component {
    state = {
        pagina: ""
    }

    onClickEtapa2 = () => {
        this.setState({
            pagina: "Etapa2"
        })
    }

    render () {
        const homepage = () => {
            switch (this.state.pagina) {
                case "Etapa2":
                return <Etapa2/>
                
                default:
                    return <div></div>
            }
        }

        return (
            <div className="App">
                <div>
                    <h3>ETAPA 1 - DADOS GERAIS</h3>
                </div>
                <div>
                    <p>1. Qual o seu nome?</p>
                    <input></input>
                </div>
                <div>
                    <p>2. Qual a sua idade?</p>
                    <input></input>
                </div>
                <div>
                    <p>3. Qual seu email?</p>
                    <input></input>
                </div>
                <div>
                    <p>4. Qual a sua escolaridade?</p>
                    <select>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto
                        </option>
                        <option value="Ensino superior completo">Ensino superior completo
                        </option>
                    </select>
                </div>
                <br/>
                    <button onClick={this.onClickEtapa2}>Proxima etapa</button>
                    {homepage()}
            </div>
        )

    }

}

export default Etapa1;