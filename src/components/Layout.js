import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

import css from './App.module.css'

const Layout = () => {
    return (
    <div className={css.navigation}>
        <ul className={css.navigationList}>
          <li className={css.navigationItem}><NavLink to="/">Home</NavLink></li>
          <li className={css.navigationItem}><NavLink to="/movies">Movies</NavLink></li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />  
        </Suspense>
    </div>
    )
}

export default Layout;