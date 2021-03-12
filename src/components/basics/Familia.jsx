import React, { cloneElement } from "react";

export default function Familia(props) {
    let sobrenome = props.sobrenome;
    const clonarElemento = ( child, i ) => cloneElement( child, {sobrenome, key: i} );
    
    return(
        <div>
            {/*cloneElement() é usado quando um componente "pai" deseja modificar as props de um de seus "filhos".
            Lembre-se que as props são somente para a leitura, por isso é necessário "clonar" o elemento original
            para "modificar" suas props. O cloneElement() conserva as props originais do elemento inicial e mescla
            com as novas props*/}

            { /*Criamos um novo vetor "props.children" para o componte Familia*/ }
            { props.children.map( clonarElemento ) }
        </div>
    );
}   