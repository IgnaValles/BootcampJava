import React from "react";
import Pokedex from "./components/Pokedex";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Pokédex</h1>
      <Pokedex />
    </div>
  );
};

export default App;
