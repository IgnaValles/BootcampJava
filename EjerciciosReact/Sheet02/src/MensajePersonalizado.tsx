// MensajePersonalizado.tsx
import React from "react";

interface MensajePersonalizadoProps {
  texto: string;
  color: string;
}

const MensajePersonalizado: React.FC<MensajePersonalizadoProps> = ({
  texto,
  color,
}) => {
  const estilo: React.CSSProperties = {
    backgroundColor: color,
    color: "white",
    textAlign: "center",
    padding: "10px",
    borderRadius: "8px",
    margin: "10px 0",
    fontSize: "18px",
  };

  return <div style={estilo}>{texto}</div>;
};

export default MensajePersonalizado;
