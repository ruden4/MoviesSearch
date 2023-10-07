import { NavLink, Route, Routes } from "react-router-dom";
import css from './App.module.css'
import Home from "pages/home";
import MovieInfo from "pages/moviesDetails";

export const App = () => {
  return (
    <div className={css.container}>
      <nav className={css.navigation}>
        <ul className={css.navigationList}>
          <li className={css.navigationItem}><NavLink to="/">Home</NavLink></li>
          <li className={css.navigationItem}><NavLink to="/movies">Movies</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<div>Movies</div>}/>
        <Route path="/movies/:movieId" element={<MovieInfo/>}/>
          <Route path="/movies/:movieId/cast" element={<div>cast</div>}/>
          <Route path="/movies/:movieId/reviews" element={<div>reviews</div>}/>
      </Routes>
    </div>
  );
};
