import React from 'react';
import './App.scss';
import {Cursor} from "./components/cursor";
import {GlobalStyles} from "./styles/globalStyles";
import {Nav} from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <GlobalStyles/>
      <Cursor/>
    </div>
  );
}

export default App;
