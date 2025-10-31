import { Outlet, NavLink } from "react-router-dom";

function ExploreLayout() {
  return (
    <>
      <aside>
        <p>Barra lateral</p>
        <NavLink to="cities">Ciudades</NavLink>
        <Outlet />
      </aside>
    </>
  );
}

export default ExploreLayout;
