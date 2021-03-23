import React from 'react'

export default function Botao(props) {
    return(
        <div>
            <button onClick={ props.gerarNumeros }>
                Sortear
            </button>
        </div>
    )
}