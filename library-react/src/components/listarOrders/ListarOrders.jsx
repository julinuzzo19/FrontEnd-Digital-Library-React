import React, { Component } from "react";

export default class ListarOrders extends Component {
  render() {
    let alquiler = this.props.alquiler;
    let isAlquiler = this.props.esAlquiler;

    let fechaalquiler = alquiler.fechaAlquiler.substring(0, 9);
    let fechadevolucion = alquiler.fechaDevolucion.substring(0, 9);
    let fechareserva = alquiler.fechaReserva.substring(0, 9);

    return (
      <div className="row">
        {/*Template para alquileres */}
        {isAlquiler && (
          <div className="col-6">
            <article className="article-item-order">
              <div className="image-space">
                <img
                  className="image-libro"
                  src={alquiler.imagen}
                  alt="Libro"
                />
              </div>
              <h2>{alquiler.titulo}</h2>
              <h3>{alquiler.autor}</h3>
              <h5>Fecha de alquiler: {fechaalquiler}</h5>
              <h5>Fecha de devolución: {fechadevolucion}</h5>
            </article>
          </div>
        )}

        {/*Template para reservas */}
        {!isAlquiler && (
          <div className="row">
            <div className="col-6">
              <article className="article-item-order">
                <div className="image-space">
                  <img
                    className="image-libro"
                    src={alquiler.imagen}
                    alt="Libro"
                  />
                </div>
                <h2>{alquiler.titulo}</h2>
                <h3>{alquiler.autor}</h3>
                <h5> Fecha de reserva: {fechareserva}</h5>
              </article>
            </div>
          </div>
        )}
      </div>
    );
  }
}
