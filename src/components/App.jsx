import { Route, Routes } from "react-router-dom";
import Home from "pages/home";
import MovieInfo from "pages/moviesDetails";
import Layout from "./Layout";
import css from "./App.module.css"
import Reviews from "./MovieInfo/Reviews";
import Cast from "./MovieInfo/Cast";
import Movies from "pages/movies";

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MovieInfo/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
