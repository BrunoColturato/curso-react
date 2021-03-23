import React from 'react'

export default function FormularioPasso(props) {
    return(
        <input
            type="number"
            value={props.passo}
            onChange={e => props.setPasso(+e.target.value)}    
        />
    )
}