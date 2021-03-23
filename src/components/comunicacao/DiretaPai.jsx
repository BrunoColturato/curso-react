import React from "react";
import DiretaFilho from "./DiretaFilho";

export default function DiretaPai() {
    return(
        <div>
            <DiretaFilho nome="Bruno" idade={20} nerd={true} />
            <DiretaFilho nome="Milena" idade={16} nerd={false} />
        </div>
    );
}