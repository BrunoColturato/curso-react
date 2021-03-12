import React, { cloneElement } from "react";

export default function Familia(props) {
    let sobrenome = props.sobrenome;

    return(
        <div>
            {/*cloneElement() é usado quando um componente "pai" deseja modificar as props de um de seus "filhos".
            Lembre-se que as props são somente para a leitura, por isso é necessário "clonar" o elemento original
            para "modificar" suas props*/}

            {props.children.map( (child, i) => {
                return cloneElement( child, {sobrenome, key: i} );
            })}
        </div>
    );
}   