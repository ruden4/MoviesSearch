import { Link } from "react-router-dom";

const MovieCard = ({ title, rating, poster, id }) => {
    return (
        <Link key={id} to={`/movies/${id}`}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={`${title} poster`} />
                <h2>{title}</h2>
                <p>Rating:
                <span>
                    {rating}
                </span>
            </p>
            </div>
        </Link>
    )
}

export default MovieCard;