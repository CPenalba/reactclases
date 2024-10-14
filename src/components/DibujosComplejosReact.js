import { Component } from "react";

class DibujosComplejosReact extends Component {
  //en state tendremos un conjunto de nombres
  state = {
    nombres: ["Lucia", "Adrian", "Antonia", "Diana", "Sofia", "Carlos"],
  };

  generarNombre = () => {
    this.state.nombres.push("NUEVO NOMBRE");
    //ACTUALIZAMOS STATE
    this.setState({
      nombres: this.state.nombres,
    });
  };

  render() {
    return (
      <div>
        <h1>Dibujos complejos react Collection</h1>
        <button onClick={() => this.generarNombre()}>Generar nombre</button>
        {
          //esto es codigo react, es diferente al codigo js
          //es codigo logico con sintaxis jsx
          //el codigo logico debe contener un return
          this.state.nombres.map((name, index) => {
            //este codigo nunca debe estar vacio, siempre tiene que devolver un return
            return (
              <h1 key={index} style={{ color: "blue" }}>
                {name}
              </h1>
            );
          })
        }
      </div>
    );
  }
}

export default DibujosComplejosReact;
