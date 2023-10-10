import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

const MovieInfoItem = ({ data }) => {

    const { title, overview, poster_path, release_date, genres, vote_average} = data;
    const date = new Date(release_date);
    const year = date.getFullYear();
    
    if (!data) {
        return;
    }
    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${title} poster`}/>
                <div>
                    <h1>{title}<span>{`(${year})`}</span></h1>
                    <p>Rating:{` ${vote_average}`}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres.map(({ name }) => name).join(" ")}</p>
                </div>
            </div>
            <div>
                <h3>Additional information</h3>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
                <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
                </Suspense>
            </div>
        </div>
    )
}

export default MovieInfoItem;