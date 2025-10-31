interface UsuarioProps {
  nombre: string;
  edad?: number;
}

function Usuario({ nombre, edad }: UsuarioProps) {
  return (
    <p>
      Nombre: {nombre} (
      {typeof edad === "number" ? `Edad: ${edad} años` : "Edad no disponible"})
    </p>
  );
  {
    /*
    return edad ? (
      <h1>
        Nombre : {nombre} (Edad: {edad} años)
      </h1>
    ) : (
      <h1>Nombre : {nombre}, Edad no disponible </h1>
    );
  */
  }
}

export default Usuario;
