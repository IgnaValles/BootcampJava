import Saludo from "../ex01/Saludo.jsx";

function Composicion() {
  return (
    <div class="Saludos">
      <Saludo nombre="Ana" />
      <Saludo nombre="Luis" />
      <Saludo nombre="Marta" />
    </div>
  );
}

export default Composicion;
