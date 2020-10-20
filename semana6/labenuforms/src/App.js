import React from 'react';
import styled from 'styled-components';
import './App.css';
import Etapa1 from './components/Etapa1';

class App extends React.Component {
   render () {
       return (
           <div className="App">
               <Etapa1>ETAPA 1</Etapa1>
           </div>
       )
   }

    
}

export default App;