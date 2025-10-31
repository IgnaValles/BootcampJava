import { useState, useEffect } from "react";

function Clock() {
  // 1️⃣ Estado que guarda la hora actual
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 2️⃣ useEffect se ejecuta después de que el componente se renderiza
  useEffect(() => {
    // Creamos un intervalo que se ejecuta cada segundo
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // 3️⃣ Cleanup: cuando el componente se desmonta, limpiamos el intervalo
    return () => {
      clearInterval(intervalId);
      console.log("⏹️ Intervalo limpiado");
    };
  }, []); // [] significa que este efecto solo corre una vez (al montar)

  // 4️⃣ Mostramos la hora
  return <h2>Hora actual: {time}</h2>;
}

export default Clock;
