import { Link, useLocation } from "react-router-dom";
import css from './MovieCard.module.css'

const MovieCard = ({ title, rating, poster, id }) => {

    const location = useLocation();
    
    return (
        <Link to={`/movies/${id}`} state={{from: location}}>
                <li className={css.item}>
                <img className={css.img} src={`https://image.tmdb.org/t/p/w300${poster}`} height="450" alt={`${title} poster`} />
                <div className={css.wrap}>
                    <h2 className={css.title}>{title}</h2>
                    <p className={css.rating}>Rating:
                    <span className={css.value}>
                        {rating}
                    </span>
                </p>
                </div>
                </li>
        </Link>
    )
}

export default MovieCard;