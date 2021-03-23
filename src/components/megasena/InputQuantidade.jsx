import React from 'react'

export default function InputQuantidade(props) {
    return(
        <div>
            <input
                type="number"
                value={props.quantidade}
                onChange={e => props.setQuantidade( +e.target.value )}
            />
        </div>
    )
}