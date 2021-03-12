import React from "react";

import "./layout/App.css";

import Primeiro from "./components/Primeiro";
import ArrowComponent from "./components/ArrowComponent";
import Aleatorio from "./components/Aleatorio";
import Card from "./components/Card";
import Familia from "./components/Familia";
import FamiliaMembro from "./components/FamiliaMembro";

export default function App() {
    return(
        <div className="App">
            <h1 className="Centralizado">Curso de React</h1>

            <div className="Exercicios">
                <Card title="#5 - Card da família" color="#ffbe0f">
                    <Familia sobrenome="Colturato" ano="2021">
                        <FamiliaMembro>Bruno</FamiliaMembro>
                        <FamiliaMembro>Pedro</FamiliaMembro>
                        <FamiliaMembro>Simone</FamiliaMembro>
                        <FamiliaMembro>Milena</FamiliaMembro>
                    </Familia>
                </Card>
                
                <Card title="#4 - Card colorido" color="#00917c">
                    <p>Agora é possível customizar a cor dos cards!</p>
                </Card>

                <Card title="#3 - Número aleatório">
                    <Aleatorio min={3} max={39} />
                </Card>

                <Card title="#2 - Componente com arrow function">
                    <ArrowComponent />
                </Card>
                
                <Card title="#1 - Primeiro componente">
                    <Primeiro />
                </Card> 
            </div>
        </div>
    )
}