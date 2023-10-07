const MovieInfoItem = ({ data }) => {

    const { id, title, overview, poster_path, release_date, genres, vote_average} = data;
    const date = new Date(release_date);
    const year = date.getFullYear();
    
    if (!data) {
        return;
    }
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${title} poster`}/>
            <div>
                <h2>{title}<span>{`(${year})`}</span></h2>
                <p>Rating:{` ${vote_average}`}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(({name}) => name).join(" ")}</p>
            </div>
        </div>
    )
}

export default MovieInfoItem;