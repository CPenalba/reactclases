import { Component } from "react";
class HijoNumero extends Component {
  sumarNumeroHijo = () => {
    var num = parseInt(this.props.numero);
    this.props.sumarNumero(num);
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Número: {this.props.numero}</h1>
        <button onClick={this.sumarNumeroHijo}>
          Sumar {this.props.numero}
        </button>
      </div>
    );
  }
}
export default HijoNumero;
