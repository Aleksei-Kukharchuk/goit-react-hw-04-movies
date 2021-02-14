import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'
import s from './AppBar.module.css'

function AppBar() {
    return (
        <div className={s.AppBar}>
            <NavLink exact to={routes.home} className={s.Home}>Home</NavLink>
            <NavLink to={routes.moviesPage} className={s.Movies}>Movies</NavLink>
        </div>
    )
}

export default AppBar;