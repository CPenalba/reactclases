import { Component } from "react";

class DibujosComplejos extends Component {
  //vamos a dibujar una serie de numeros en formato html utilizando un array con <li>
  dibujarNumeros = () => {
    //declaramos un array para almacenar el dibujo
    var lista = [];
    //vamos a realizar un bucle para rellenar numeros dinamicos
    for (var i = 1; i <= 7; i++) {
      var numero = parseInt(Math.random() * 100) + 1;
      //mediante el metodo push del array iremos rellenando el codigo html´
      lista.push(<li key={i}>{numero}</li>);
    }
    return lista;
  };

  render() {
    return (
      <div>
        <h1>Dibujos complejos HTML</h1>
        <ul>
          {/* si se ponen parentesis se ejecuta con el render */}
          {this.dibujarNumeros()}
        </ul>
      </div>
    );
  }
}

export default DibujosComplejos;
