import React from "react";
import "./home.css";
import logo from "../../assets/images/searchbookimg.png";
import ListarLibros from "../listarLibrosComponent/listarLibros";

class HomeComponent extends React.Component {
  state = {
    listado: [],
  };

  async getLibros() {
    await fetch("https://localhost:44366/api/Libros")
      .then((res) => res.json())
      .then((lista) => {
        this.setState({ listado: lista });
      });
  }

  reservarLibro(){
  }

  alquilarLibro(){

    
  }

  componentDidMount() {
    this.getLibros();
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="infopagina">Catálogo de libros</h2>

        <div className="col-4 d-inline-block text-center">
          <img id="imgsearchbook" src={logo} alt="searchimg"></img>
          <div className="container"></div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="articles" id="articles">
                {this.state.listado.map((libro, i) => {
                  return <ListarLibros libros={libro} 
                  key={i}
                  /* Reservar={this.reservarlibro}
                  Alquilar={this.alquilarLibro} */
                   />;
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
