import React from 'react';
import Casa from './Casa';

class App extends React.Component{
  render() {
    return (
      <div> 
        <Casa />
        
      </div>
    );
}
}


export default App;
// Faça uma aplicação React com 3 componentes de classe, chamados "Casa", "Porta" e "Janela"(cada  um  deles  deve  estar  em  um  arquivo  ".js"). 
// O  componente "Casa"usa  os  componentes"Janela"e "Porta". Imprima as seguintes mensagens no browser:"Casa": Eu sou uma Casa."Janela": Eu tenho 9 janelas."Porta":
// Eu tenho 8 portas.