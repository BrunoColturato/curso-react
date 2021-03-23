import React from "react";

import "./layout/App.css";

import Primeiro from "./components/basics/Primeiro";
import ArrowComponent from "./components/basics/ArrowComponent";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/basics/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import DadosUsuario from "./components/condicional/DadosUsuario";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador"

export default function App() {
    return(
        <div className="App">
            <h1 className="Centralizado">Curso de React</h1>
            
            <div className="Exercicios">
                <Card title="#12 - Contador" color="#00917c">
                    <Contador valorInicial={10} passoInicial={1} />
                </Card>

                <Card title="#11 - Componente controlado">
                    <Input />
                </Card>

                <Card title="#10 - Comunicação indireta + states">
                    <IndiretaPai />
                </Card>

                <Card title="#9 - Comunicação direta" color="#383e56">
                    <DiretaPai />
                </Card>

                <Card title="#8 - Rederização condicional" color="#383e56">
                    <ParOuImpar>11</ParOuImpar>
                    <DadosUsuario usuario={{ nome: "Bruno" }}/>
                    <DadosUsuario />
                </Card>

                <Card title="#7 - Tabela de produtos" color="#383e56">
                    <TabelaProdutos /> 
                </Card>

                <Card title="#6 - Repetições de elementos"color="#fb743e">
                    <ListaAlunos /> 
                </Card>

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