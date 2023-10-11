import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { getFilteredMovies } from "API/api";
import Searchbar from "components/Searchbar/Searchbar";
import TrendingList from "components/TrendingList/TrendingList";


const Movies = () => {

    const [filteredMovies, setFilteredMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const serchQuery = searchParams.get('title')

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
        setSearchParams({ title })
    };

    return (
        <div>
            <Searchbar onSubmit={onSubmit} />
            <div>
            {<TrendingList list={filteredMovies}/>}
            </div>
        </div>
    )
}

export default Movies;