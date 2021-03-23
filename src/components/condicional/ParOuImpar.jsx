import React from "react";

export default function ParOuImpar( props ) {
    let isPar = parseInt( props.children ) % 2 === 0;
    return(
        <div>
            <span>O número {props.children} é </span>
            { isPar ? <span>par</span> : <span>impar</span> }
        </div>
    );
}