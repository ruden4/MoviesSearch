import MovieCard from "./MovieCard";
import css from "./TrendingList.module.css"

const TrendingList = ({ list }) => {
    return (
        <section>
            <ul className={css.list}>
                {list.map(({ id, title, vote_average, poster_path}) =><MovieCard
                    key={id}
                    title={title}
                    rating={vote_average}
                    poster={poster_path}
                    id={id}/>)}
            </ul>
        </section>
    )
}

export default TrendingList;