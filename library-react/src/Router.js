import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Importar componentes
import Home from "./components/homeComponent/home";
import Orders from "./components/ordersComponent/orders";
import Error from "./components/errorComponent/error";
import HeaderComponent from "./components/headerComponent/header";
import FooterComponent from "./components/footerComponent/footer";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>

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
