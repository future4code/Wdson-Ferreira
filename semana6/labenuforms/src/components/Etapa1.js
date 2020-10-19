import React from 'react';

class Etapa1 extends React.Component {

    render() {
        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <button onClick={this.onClickProximaEtapa}>
                    Próxima Etapa
                </button>

            </div>

        )

    }

}

export default Etapa1;