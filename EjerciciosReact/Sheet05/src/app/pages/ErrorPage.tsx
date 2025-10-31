import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>Error en la pagina</h1>
      <NavLink to="/">Volver a Home</NavLink>
    </>
  );
}

export default ErrorPage;
