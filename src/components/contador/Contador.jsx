import React from 'react'

import DisplayNumero from './DisplayNumero'
import FormularioPasso from './FormularioPasso'
import Botao from './Botao'

class Contador extends React.Component {
    state = {
        numero: this.props.valorInicial || 0,
        passo: this.props.passoInicial || 1,
    }

    incrementar = () => {
        this.setState( {
            numero: this.state.numero + this.state.passo,
        } )
    }

    decrementar = () => {
        this.setState( {
            numero: this.state.numero - this.state.passo,
        } )
    }

    setPasso = (novoPasso) => {
        this.setState( {
            passo: novoPasso,
        } )
    }

    render() {
        return(
            <div>
                <DisplayNumero numero={this.state.numero}/>
                <FormularioPasso passo={this.state.passo} setPasso={this.setPasso}/>
                <Botao incrementar={this.incrementar} decrementar={this.decrementar}/>
            </div>
        )
    }
}

export default Contador