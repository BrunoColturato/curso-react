import React from "react";

import produtos from "../../data/produtos";

export default function TabelaProdutos() {
    const getProduto = produtos.map( 
        function(el){
            return(
                <tr key={ el.id }>
                    <td>{ el.id }</td>
                    <td>{ el.nome }</td>
                    <td>R${ el.preco.toFixed(2).replace('.', ',') }</td>
                </tr>
            );
        }  
    );

    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {getProduto}
                </tbody>
            </table>
        </div>
    );
}