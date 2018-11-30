import React, { Component } from 'react';
import '../css/App.css';
import Header from "./header";
import Formulario from './formulario';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from "../helpers/helper";

class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }
  cotizarSeguro = (datos) => {
      console.log(datos)

      const {marca, plan, year} = datos;
      let resultado = 2000;
      const diferencia = obtenerDiferenciaAnio(year);

      resultado -= ((diferencia * 3) * resultado) / 100;
      resultado = calcularMarca(marca) * resultado;
      let incrementoPlan = obtenerPlan(plan);
      resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
      console.log(resultado)
      this.setState({
        resultado: resultado,
        datos: { ...datos
          // marca: marca,
          // plan: plan,
          // year: year
        }
      })
  }

  render() {
    return (
      <div className="contenedor">
        <Header
        title="Cotizador de seguros de autos"/>

        <div className="contenedor-formulario">
          <Formulario
          cotizarSeguro={this.cotizarSeguro}
          />
        </div>
      </div>
    );
  }
}

export default App;
