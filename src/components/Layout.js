import { NavLink, Outlet } from "react-router-dom";
import css from './App.module.css'

const Layout = () => {
    return (
    <div className={css.navigation}>
        <ul className={css.navigationList}>
          <li className={css.navigationItem}><NavLink to="/">Home</NavLink></li>
          <li className={css.navigationItem}><NavLink to="/movies">Movies</NavLink></li>
        </ul>
        <Outlet />  
    </div>
    )
}

export default Layout;