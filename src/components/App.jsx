import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import css from "./App.module.css"

const Home = lazy(() => import('./pages/Home'));
const MoviesDetails = lazy(() => import('./pages/MoviesDetails'));
const Movies = lazy(() => import('./pages/Movies'));
const Layout = lazy(() => import('./Layout'));
const Reviews = lazy(() => import('./MovieInfo/Reviews'));
const Cast = lazy(() => import('./MovieInfo/Cast'));

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
