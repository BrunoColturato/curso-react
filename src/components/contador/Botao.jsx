import React from 'react'

export default function Botao(props) {
    return(
        <div>
            <button onClick={props.incrementar}>+</button>
            <button onClick={props.decrementar}>-</button>
        </div>
    )
}