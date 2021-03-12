import React from "react";

import alunos from "../../data/alunos";

export default function ListaAlunos() {
    const alunosJSX = alunos.map( el => ( <li key={el.id}>({el.id}) {el.nome} - nota: {el.nota}</li> ) );

    return(
        <ul style={{ textAlign: "left", listStyle: "none" }}>
            {alunosJSX}
        </ul>
    );
}