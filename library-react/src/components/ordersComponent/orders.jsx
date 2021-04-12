import React from "react";
import "./orders.css";
import Global from "../../models/Global";
import ListarOrders from "../listarOrders/ListarOrders.jsx";


class OrdersComponent extends React.Component {
  state = {
    alquileres: [],
    reservas: [],
  };

  getAlquileres = async (id) => {
    await fetch(Global.url_alquileres_clientes + id)
      .then((res) => res.json())
      .then((data) => {
        let listaalquileres = [];
        let listareservas = [];

        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          if (element.fechaReserva === "") {
            listaalquileres.push(element);
          } else {
            listareservas.push(element);
          }
        }

        this.setState({
          alquileres: listaalquileres,
          reservas: listareservas,
        });
      });
  };

  componentDidMount() {
    this.getAlquileres(1);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="infopaginaorders">Mis pedidos</h1>
        <div className="row subtitlerow">
          <div className="col-6">
            <h2 className="orderstitle">Mis Alquileres</h2>
          </div>
          <div className="col-6">
            <h2 className="orderstitle">Mis Reservas</h2>
          </div>
        </div>
        {/*LIMPIAR FLOTADOS*/}
        <div className="clearfix" />
        {/* Fin row */}
        <div className="row">
          <div className="col-5">
            <div id="articles-alquileres">{/* Articulos alquileres  */
              this.state.alquileres.map((item,i)=>{
                return (
                  <ListarOrders
                  alquiler={item}
                  key={item.id}
                  esAlquiler={true}
                  />
                );
              })
            }</div>
          </div>
          <div className="col-5">
            <div id="articles-reservas">{/* Articulos reservas  */
            this.state.reservas.map((item,i)=>{
              return (
                <ListarOrders
                alquiler={item}
                key={item.id}
                esAlquiler={false}
                />
              );
            })
            }</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrdersComponent;
