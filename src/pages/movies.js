import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getFilteredMovies } from "API/api";
import MovieCard from "components/TrendingList/MovieCard";
import Searchbar from "components/Searchbar/Searchbar";


const Movies = () => {

    const [filteredMovies, setFilteredMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();

    const serchQuery = searchParams.get('name')

    useEffect(() => {
        if (!serchQuery) return;
        const getSearchList = async () => {
            try {
                await getFilteredMovies(serchQuery)
                    .then(({ results }) => {
                        if (!results.length) return alert('Sorry, no results...');
                        setFilteredMovies(results)
                    })
            } catch (error) {
                alert(`Sorry! Error:${error}`)
            };
        }
        getSearchList()
    }, [serchQuery]);

    const onSubmit = title => {
        setSearchParams({ name:title })
    };

    return (
        <div>
            <Searchbar onSubmit={onSubmit} />
            {filteredMovies.map(({ title, vote_average, poster_path, id }) =>
                    <MovieCard key={id} title={title} rating={vote_average} poster={poster_path} id={id} />)}
        </div>
    )
}

export default Movies;