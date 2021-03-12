import React from "react";

export default function FamiliaMembro(props) {
    return(
        <div>
            {props.children} <strong>{props.sobrenome}</strong> {props.ano}
        </div>
    );
}