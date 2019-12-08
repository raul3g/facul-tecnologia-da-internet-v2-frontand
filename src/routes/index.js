import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Order from "../pages/Order";
import ProductId from "../pages/ProductId";
import Product from "../pages/Product";
import Update from "../pages/Product/Update";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/product/update/:id" exact component={Update} isPrivate />
      <Route path="/product/:id" exact component={ProductId} isPrivate />
      <Route path="/product" exact component={Product} isPrivate />
      <Route path="/order" exact component={Order} isPrivate />
    </Switch>
  );
}
