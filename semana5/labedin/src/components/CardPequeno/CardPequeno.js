import React from 'react';
import './CardPequeno.css';

function CardPequeno (props) {

    return (
        <div className="smallcard-container">
            <img src={props.imagem} />
            <div>
                <h4>{props.nome}</h4>
                <p>{props.descricaoEndereco}</p>
                <p id="descricao-email">{props.descricaoEmail}</p>
            </div>
        </div>               

    );
}

export default CardPequeno;