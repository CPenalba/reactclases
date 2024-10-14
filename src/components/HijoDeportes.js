import { Component } from "react";

class HijoDeportes extends Component {
  seleccionarFavorito = () => {
    //capturamos el deporte seleccioado en props
    var deporte = this.props.nombre;
    //realizamos la llamada al padre envinado el deporte
    this.props.mostrarFavorito(deporte);
  };
  //quiero visualizar el deporte favorito
  //   seleccionarFavorito = () => {
  //     this.setState({
  //       mensaje: "Su deporte favorito es: " + this.props.nombre,
  //     });
  //   };
  //   state = {
  //     mensaje: "",
  //   };
  render() {
    return (
      <div>
        <h2 style={{ color: "blue" }}>{this.props.nombre}</h2>
        {/* <h4>{this.state.mensaje}</h4> */}
        {/* <button onClick={this.seleccionarFavorito}>Seleccionar favorito</button> */}
        <button onClick={this.seleccionarFavorito}>Seleccionar favorito</button>
      </div>
    );
  }
}

export default HijoDeportes;
