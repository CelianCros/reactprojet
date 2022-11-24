import * as React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline"
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/Recettes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Recettes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Blog"
            style={({ isActive }) =>(isActive ? activeStyle : undefined)}>
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
