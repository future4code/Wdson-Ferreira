import React from 'react';
import styled from 'styled-components';
import './App.css';
import Etapa1 from './components/Etapa1';

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

class App extends React.Component {

    state = {
        proximaPagina: false
    }

    onClickProximaEtapa = () => {
        this.setState({
            proximaPagina: true
        })
    }

    render() {
        const paginaRenderizada = () => {
            if (this.state.proximaPagina) {
                return <Etapa1 funcaoClickEtapa = 
                {this.onClickProximaEtapa}/>
            } 
        }
        return <AppContainer>{paginaRenderizada()}</AppContainer>;
    }
}

export default App;
