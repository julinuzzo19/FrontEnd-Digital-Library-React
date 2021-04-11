import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Importar componentes
import Home from "./components/homeComponent/home.jsx";
import Orders from "./components/ordersComponent/orders.jsx";
import Error from "./components/errorComponent/error";
import HeaderComponent from "./components/headerComponent/header";
import FooterComponent from "./components/footerComponent/footer";
import NavbarComponent from "./components/navbarComponent/navbar";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>

        <NavbarComponent></NavbarComponent>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/orders" component={Orders}></Route>
          <Route component={Error}></Route>
        </Switch>

        <FooterComponent></FooterComponent>
      </BrowserRouter>
    );
  }
}

export default Router;
