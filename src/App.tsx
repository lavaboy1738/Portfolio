import React from 'react';
import './App.scss';
import {Cursor} from "./components/cursor";
import {GlobalStyles} from "./styles/globalStyles";
import {Nav} from "./components/nav";
import {Switch, Route} from "react-router-dom";
import {Homepage} from "./pages/homepage";
import {Works} from "./pages/works";
import {About} from "./pages/about";
import {NotFound} from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Nav/>
      <GlobalStyles/>
      <Cursor/>
      <Switch>
        <Route path="/" exact>
          <Homepage/>
        </Route>
        <Route path="/works" exact>
          <Works/>
        </Route>
        <Route path="/About" exact>
          <About/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
