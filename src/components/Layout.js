import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";

import css from './App.module.css'

const Layout = () => {
  const StyledLink = styled(NavLink)`
  &.active {
    text-decoration:underline;
  }
`;
    return (
    <div className={css.navigation}>
        <ul className={css.navigationList}>
          <li className={css.navigationItem}><StyledLink to="/">Home</StyledLink></li>
          <li className={css.navigationItem}><StyledLink to="/movies">Movies</StyledLink></li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />  
        </Suspense>
    </div>
    )
}

export default Layout;