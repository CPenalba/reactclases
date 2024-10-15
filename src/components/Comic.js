const { Component } = require("react");

class Comic extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.comic.titulo}</h1>
        <p>{this.props.comic.descripcion}</p>
        <img
          src={this.props.comic.imagen}
          style={{ width: "100px", height: "150px" }}
        />
      </div>
    );
  }
}

export default Comic;
