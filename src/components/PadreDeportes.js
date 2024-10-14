import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component {
  deportes = ["Petanca", "Curling", "Poker", "Padel", "Futbol"];

  //necesitamos un metodo para dibujar el deporte hijo
  //recibiremos el deporte favorito seleccionado en dicho metodo
  mostrarFavorito = (deporteSeleccionado) => {
    //modificamos el deporte favorito de state
    this.setState({
      favorito: deporteSeleccionado,
    });
  };

  //creamos una variable state para mostrar el deporte seleccionado
  state = {
    favorito: "",
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Padre Deportes</h1>
        <h4 style={{ backgroundColor: "yellow" }}>
          Su deporte favorito es: {this.state.favorito}
        </h4>
        {
          //recorremos todos los deportes y dibujamos etiquetas hijo por cada uno
          this.deportes.map((deporte, index) => {
            return (
              <HijoDeportes
                key={index}
                nombre={deporte}
                mostrarFavorito={this.mostrarFavorito}
              />
            );
          })
        }
      </div>
    );
  }
}

export default PadreDeportes;
