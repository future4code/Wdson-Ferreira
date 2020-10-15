import React from 'react';
import './App.css';
import perfil from './img/perfil.jpg';
import exp_prof_1 from './img/exp-job1.jpg';
import exp_prof_2 from './img/exp-job2.jpg';
import email from './img/email-icon.png';
import endereco from './img/endereco-icon.png';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil}
          nome="Wdson Henrique" 
          descricao="Oi, eu sou o Wdson Henrique, tenho 25 anos. Gosto de programação especialmente web,
          sou aluno da Labenu e nas minhas horas vagas assisto canais estrangeiros sobre tecnologia
          em geral."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={endereco} 
          nome="Endereco:"
          descricaoEndereco="Avenida Águas Claras, 55, São Luis/MA"
        />
      
        <CardPequeno
          imagem={email}
          nome="Email:"
          descricaoEmail="kingdallas23@labenu.com"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={exp_prof_1}
          nome="Kumon" 
          descricao="Auxiliar de escritório e instrutor de matemática" 
        />
        
        <CardGrande 
          imagem={exp_prof_2} 
          nome="SINDSEP-MA" 
          descricao="Xerox e Impressão de arquivos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
