import { Link } from "react-router-dom";

const MovieCard = ({ title, rating, poster, id }) => {
    return (
        <Link to={`/movies/${id}`}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300${poster}`} height="450" alt={`${title} poster`} />
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