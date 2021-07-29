import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import { MeasurementCard } from "./components/Index";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/averages" component={MeasurementCard} />
  </Switch>
);

export default Routes;
