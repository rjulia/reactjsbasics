import React, { Component } from 'react';
import {  primeraMayuscula} from "../helpers/helper";
import Resultado from "./resultado";

export class Resumen extends Component {
  
  mostrarResumen = () => {
    const {marca, year, plan} = this.props.datos;

    if (!marca || !year || !plan) return null;
    
    return (
      <div className="resumen">
        <h2> resumen de la cotizacion</h2>
        <ul>
          <li> Marca:{primeraMayuscula(marca) }</li>
          <li> Year: {year}</li>
          <li> Plan: {primeraMayuscula(plan)}</li>
          
        </ul>
        
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.mostrarResumen()}
        <Resultado
          resultado ={this.props.resultado}
        />
      </div>
    )
  }
}

export default Resumen
