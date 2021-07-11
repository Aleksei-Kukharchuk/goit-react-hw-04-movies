import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import routes from "../../routes";
import s from "./AppBar.module.css";

function AppBar({ location }) {
  return (
    <div className={s.AppBar}>
      <NavLink
        exact
        to={routes.home}
        className={
          location.pathname === "/" ? `${s.Home} ${s.active}` : `${s.Home}`
        }
      >
        Trending today
      </NavLink>
      <NavLink
        to={routes.moviesPage}
        className={
          location.pathname === "/movies"
            ? `${s.Movies} ${s.active}`
            : `${s.Movies}`
        }
      >
        Movies
      </NavLink>
    </div>
  );
}

export default withRouter(AppBar);
