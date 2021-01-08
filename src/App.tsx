import React from 'react';
import './App.scss';
import {Cursor} from "./components/cursor";
import {GlobalStyles} from "./styles/globalStyles";
import {Switch, Route} from "react-router-dom";
// import {Homepage} from "./pages/homepage";
import {Works} from "./pages/works";
import {About} from "./pages/about";
import {NotFound} from "./pages/NotFound";
import {NewHomePage} from "./pages/newHomePage";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Cursor/>
      <Switch>
        <Route path="/" exact>
          <NewHomePage/>
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
