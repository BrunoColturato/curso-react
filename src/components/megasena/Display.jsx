import React from 'react'

export default function Display(props) {
    return(
        <div>
            <div>Números sorteados:</div>
            <div><strong>{props.numeros.map( element => `${element} `)}</strong></div>
        </div>
    )
}