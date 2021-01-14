import React, { useEffect, useState } from 'react';
import './App.scss';
import {Cursor} from "./components/cursor";
import {GlobalStyles} from "./styles/globalStyles";
import {Switch, Route, useLocation} from "react-router-dom";
// import {Homepage} from "./pages/homepage";
import {Works} from "./pages/works";
import {About} from "./pages/about";
import {NotFound} from "./pages/NotFound";
import {NewHomePage} from "./pages/newHomePage";
import {Project} from "./pages/project";
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const root = document.documentElement;
  window.addEventListener("resize", ()=>{
    setDeviceWidth(window.innerWidth)
  })
  useEffect(()=>{
    root.style.setProperty("--VW", `${deviceWidth*0.01}px`)
  }, [deviceWidth, root.style])

  return (
    <div className="App">
        <GlobalStyles/>
        <Cursor/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <NewHomePage/>
          </Route>
          <Route path="/works" exact>
            <Works/>
          </Route>
          <Route path="/works/:projectID" exact>
            <Project/>
          </Route>
          <Route path="/About" exact>
            <About/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
