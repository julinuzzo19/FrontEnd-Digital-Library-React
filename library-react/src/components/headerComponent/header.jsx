import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.jpg";
import * as ClienteService from "../../services/ClienteService";

class HeaderComponent extends React.Component {
  state = { cliente: [] };

  getCliente = async () => {
    await ClienteService.getCliente(1).then((data) => {
      this.setState({ cliente: data });
    });
  };

  componentDidMount() {
    this.getCliente();
  }
  render() {
    return (
      <header>
        <div className="row">
          <div className="container-fluid divtitle col-8">
            <img id="imgheader" src={logo} alt="HeaderImg" />
          </div>

          <div className="divsidetitle col-2 text-center container-fluid">
            <h3 id="h3title" className="titlecliente pt-5  ml-5 pl-4">
              Bienvenido
            </h3>
            <h3 className="clienteName"> {this.state.cliente.nombre}!</h3>
          </div>
          <div className="col-2 text-center pt-3 mt-3">
            <button type="button" className="btn btn-info w-75">
              Ir a mi perfil
            </button>
            <button type="button" className="btn btn-danger w-75">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
