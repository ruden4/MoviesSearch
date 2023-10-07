import MovieCard from "./MovieCard";

const TrendingList = ({ list }) => {
    return (
        <section>
            <h2>Trending now</h2>
            <div>
                {list.map(({ id, title, vote_average, poster_path}) => <MovieCard
                    key={id}
                    title={title}
                    rating={vote_average}
                    poster={poster_path}
                    id={id}/>)}
            </div>
        </section>
    )
}

export default TrendingList;