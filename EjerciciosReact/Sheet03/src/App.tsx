import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Ocultar reloj" : "Mostrar reloj"}
      </button>
      {show && <Clock />}
    </div>
  );
}

export default App;
