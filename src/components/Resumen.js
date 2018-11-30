import React, { Component } from 'react'

export class Resumen extends Component {
  
  mostrarResumen = () => {
    const {marca, year, plan} = this.props.datos;

    if (!marca || !year || !plan) return null;
    
    return (
      <div className="resumen">
        <h2> resumen de la cotizacion</h2>
        <ul>
          <li> Marca: {marca}</li>
          <li> Year: {year}</li>
          <li> Plan: {plan}</li>
          
        </ul>
        
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.mostrarResumen()}
        
      </div>
    )
  }
}

export default Resumen
