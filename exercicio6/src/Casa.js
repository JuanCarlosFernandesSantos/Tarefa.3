import React from 'react';
import Janela from './Janela';
import Porta from './Porta';

class Casa extends React.Component{
    render(){
        return (
            <div>
                <h2>Eu sou uma casa</h2>
                <Janela />
                <Porta />
            </div>
        )
    }

}

export default Casa; //sempre exportar com o nome do componente (classe)