import React from "react";

import If, { Else } from "./If";

export default function DadosUsuario( props ) {
    let usuario = props.usuario || {};

    return(
        <div>
            <If test={usuario && usuario.nome}>
                <span>Olá {usuario.nome}!</span>

                <Else>
                    <span>Olá pessoa desconhecida!</span>
                </Else>
            </If>
        </div>
    );
}