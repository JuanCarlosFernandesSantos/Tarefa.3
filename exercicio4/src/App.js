import React from 'react';

class Cachorro extends React.Component {
  constructor(nome) {
    super(nome);
    this.state={
      nome:"Zeus"
    }
  }
  render() {
    const {nome} = this.state;
    return(
      <h1>Eu sou um Cachorro e meu nome é  {nome}.</h1>
    )
  }
}
export default Cachorro;

//Faça  uma  aplicação  React  com  um  componente de  classe,  chamado "Cachorro", com  apropriedade"nome", usando props,e imprima a seguinte mensagem no browser:
// "Eu sou um Cachorro e o meu nome é {imprimir o nome}."