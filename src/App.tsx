import React from 'react';
import './App.scss';
import {Cursor} from "./components/cursor";
import {GlobalStyles} from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Cursor/>
    </div>
  );
}

export default App;
