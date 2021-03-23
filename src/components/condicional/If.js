export default function If( props ) {
    
    // Procurando o componente Else dentro do componente If
    const elseChild = props.children.filter( child => child.type && child.type.name === "Else" )[0];

    // Procurando os elementos dentro do If que não estão no Else
    const ifChild = props.children.filter( child => child !== elseChild );

    console.log( ifChild );
    
    if( props.test ) {
        return ifChild;
    }
    else if( elseChild ) {
        return elseChild;
    }
    else {
        return false;
    }
}

const Else = function( props ) {
    return props.children;
}

export { Else };