import React from 'react';

class Bola extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      material:"couro"
    }
  }
  render() {
    const {material} = this.state;
    return(
      <h1>Eu tenho uma bola de {material}.</h1>
    )
  }
}
export default Bola

