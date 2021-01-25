import React, { useEffect} from 'react';
import './App.scss';
import {Cursor} from "./components/cursor";
import {Cover} from "./components/cover";
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
  const root = document.documentElement;
  const width = window.innerWidth;

  window.addEventListener("resize", ()=>{
    const newWidth = window.innerWidth;
    if(newWidth < 500){
      if(newWidth !== width){
        window.location.reload();
      }
    }else{
      window.location.reload();
    }
  })

  useEffect(()=>{
    root.style.setProperty("--VW", `${window.innerWidth*0.01}px`);
    root.style.setProperty("--VH", `${window.innerHeight*0.01}px`);
  }, [root.style])

  return (
    <div className="App">
        <GlobalStyles/>
        <Cover/>
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
