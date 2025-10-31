// App.tsx
import React from "react";
import MensajePersonalizado from "./MensajePersonalizado";

const App: React.FC = () => {
  return (
    <div
      style={{ width: "320px", margin: "50px auto", fontFamily: "sans-serif" }}
    >
      <h2>Mensajes Personalizados</h2>
      <MensajePersonalizado texto="¡Hola, TypeScript!" color="lightblue" />
      <MensajePersonalizado texto="React es genial 😎" color="tomato" />
      <MensajePersonalizado texto="Props + TS = ❤️" color="mediumseagreen" />
    </div>
  );
};

export default App;
