import React from "react";

export default function Aleatorio(props) {
    const { min, max } = props;

    const numero = parseInt( Math.random() * ( max - min ) + min );

    return(
        <p>Número aleatório entre {min} e {max}: {numero}</p>
    );
}