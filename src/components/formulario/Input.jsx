import React, { useState } from "react";

export default function Input() {
    let [texto, setTexto] = useState('Controlado');

    return(
        <div>
            <input value={texto} onChange={e => setTexto(e.target.value)}/> {/* Componente controlado */}
            <input value={undefined}/> {/* Componente não controlado por estado */}
        </div>
    );
}