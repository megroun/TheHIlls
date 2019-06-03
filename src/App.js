import React from 'react';
import Test from "./components/test";
import Main from "./components/main";
import Adsinfo from "../src/components/adsinfo";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Route path="/" component={Main} exact strict />
      <Route path="/test" component={Test} exact strict />
      <Route path="/adsinfo/:id" component={Adsinfo} exact strict />
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
