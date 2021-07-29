import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Averages } from "./pages";
import { MeasurementCard } from "./components";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/averages" component={Averages} />
  </Switch>
);

export default Routes;
