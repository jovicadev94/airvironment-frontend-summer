import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Averages } from "./pages";
import { MeasurementCard } from "./components";
import AllData from "./pages/AllData";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/averages" component={Averages} />
    <Route path="/all_data" component={AllData} />
  </Switch>
);

export default Routes;
