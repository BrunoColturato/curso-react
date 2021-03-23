import React from "react";

export default function IndiretaFilho(props) {
    const callback = props.quandoClicar;
    const gerarEntre30e70 = () => parseInt( Math.random() * 40 + 30 );
    const gerarBoolean = () => Math.random() > 0.5;

    return(
        <div>
            <div>Filho</div>
            <button onClick={ e => callback( 'Pedro', gerarEntre30e70(), gerarBoolean() ) }>Clique para mudar o pai!</button>
        </div>
    );
}