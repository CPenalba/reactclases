import { Component } from "react";
import HijoNumero from "./HijoNumero";
class PadreNumeros extends Component {
  state = {
    numeros: [5, 11],
    suma: 0,
  };

  sumarNumero = (valor) => {
    this.setState({
      suma: this.state.suma + valor,
    });
  };
  generarNumeroAleatorio = () => {
    let aleatorio = parseInt(Math.random() * 200) + 1;
    this.state.numeros.push(aleatorio);
    this.setState({
      numeros: this.state.numeros,
    });
  };
  render() {
    return (
      <div>
        <h1>Padre Números</h1>
        <h2 style={{ backgroundColor: "yellow" }}>
          La suma es {this.state.suma}
        </h2>
        <button onClick={this.generarNumeroAleatorio}>Generar número</button>
        {this.state.numeros.map((num, index) => {
          return (
            <HijoNumero
              numero={num}
              key={index}
              sumarNumero={this.sumarNumero}
            />
          );
        })}
      </div>
    );
  }
}
export default PadreNumeros;
