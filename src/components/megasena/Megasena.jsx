import React, { useState } from 'react'

import Display from './Display'
import InputQuantidade from './InputQuantidade'
import Botao from './Botao'

export default function Megasena() {

    const [numeros, setNumeros] = useState(Array(6).fill(0))
    const [quantidade, setQuantidade] = useState(6)

    function geraNumeroSemRepetir(array) {
        // Gerando numero entre 0 e 60
        let numero = ( Math.random() * 61 ) | 0

        // Conferindo se ele já está no vetor
        if( !array.includes(numero) ) {
            return numero
        }
        else {
            return geraNumeroSemRepetir(array)
        }
    }

    function gerarNumeros() {
        let numero = 0

        let valores = Array(quantidade)
            .fill(0)
            .reduce( (vetor, el) => {
                numero = geraNumeroSemRepetir(vetor)
                return [...vetor, numero]
            }, [] )
            .sort( (a, b) => a - b )
        
            setNumeros(valores)
    }

    return(
        <div>
            <Display numeros={numeros}/>
            <InputQuantidade quantidade={quantidade} setQuantidade={setQuantidade}/>
            <Botao gerarNumeros={gerarNumeros}/>
        </div>
    )
}