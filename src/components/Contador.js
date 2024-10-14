//debemos importar component para la herencia
import { Component } from "react";

//podemos declarar metodos fuera de la clase
//dichos metodos no pueden utilizar nada del component
//y se declaran con fucntion
function metodoExterno() {
  console.log("Funcion externa de la clase");
}

class Contador extends Component {
  //las variables y los metodos se declaran fuera del render
  //no se utilizan palabras clave como var, let o const
  numero = 1;

  //los metodos se declaran directamente aqui
  incrementarNumero = () => {
    //para poder acceder a las variables de la clase debemos utilizar la palabra clave this
    this.numero = this.numero + 1;
    console.log("Valor de numero: " + this.numero);
  };

  //vamos a declarar una variable de estado que tendra el valor de props
  state = {
    valor: parseInt(this.props.inicio),
  };

  //creamos un metodo para cambiar el valor del state
  incrementarValorState = () => {
    //para modificar los elementos que tengamos dentro de state se utiliza setState con un json del objeto con las variable
    //que deseemos modificar
    //las variables que no modifiquemos no cambian
    this.setState({
      valor: this.state.valor + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Class Component Contador</h1>
        <h2 style={{ color: "blue" }}>
          Inicio del contador: {this.props.inicio}
        </h2>
        <h2 style={{ color: "red" }}>Valor del state: {this.state.valor}</h2>
        {/* La llamada a los metodos es mas sencilla, no necesitamos lambda y tampoco se utilizan parentesis*/}
        <button onClick={this.incrementarValorState}>Incrementar state</button>

        {/* Vamos a utilizar una funcion anonima para llamar a un metodo */}
        <button
          onClick={() => {
            //si desemaos llamar a un metodo de la clase, se utiliza la palabra this
            this.incrementarNumero();
            //si deseamos llamar a un metodo externo del component no utilimos this
            metodoExterno();
          }}
        >
          Incrementar numero
        </button>
      </div>
    );
  }
}

export default Contador;
