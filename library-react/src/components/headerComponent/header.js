import React from "react";
import './header.css';
import logo from '../../assets/images/logo.jpg';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <div class="row">
          <div class="container-fluid divtitle col-8">
            <img id="imgheader" src={logo} />
          </div>

          <div class="divsidetitle col-2 text-center container-fluid">
            <h3 id="h3title" class="titlecliente pt-5  ml-5 pl-4">
              Bienvenido
            </h3>
          </div>
          <div class="col-2 text-center pt-3 mt-3">
            <button type="button" class="btn btn-info w-75">
              Ir a mi perfil
            </button>
            <button type="button" class="btn btn-danger w-75">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;