import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export class Resultado extends Component {

  render() {
    const resultado = this.props.resultado;
    const mensaje = (!resultado) ? 'Elije marca, año y seguro' : 'resultado es $'
    return (
      <div className="gran-total">
      {mensaje}
        <TransitionGroup component="span" className="resultado">
          <CSSTransition
            classNames="resultado"
            key={resultado}
            timeout={{ enter: 500, exit: 500 }}>
            <span>{resultado}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default Resultado
