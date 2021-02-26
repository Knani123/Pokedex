import React from "react";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import { Switch, Route } from "react-router-dom";
const App = (props) => {
  console.log(props);
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      <Route exact path="/:idPok" render={(props) => <Pokemon {...props} />} />
    </Switch>
  );
};

export default App;
