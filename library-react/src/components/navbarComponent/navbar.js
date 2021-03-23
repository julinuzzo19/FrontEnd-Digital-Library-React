import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

class NavbarComponent extends React.Component {
  render() {
    return (
      <div id="nav">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav topnav">
              <li className="nav-item active">
                <strong>
                  <NavLink className="nav-link active" to="./index.html">
                    Libros disponibles
                  </NavLink>
                </strong>
              </li>
              <li className="nav-item">
                <strong>
                  <NavLink className="nav-link" to="./views/orders.html">
                    Ver mis pedidos
                  </NavLink>
                </strong>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarComponent;
