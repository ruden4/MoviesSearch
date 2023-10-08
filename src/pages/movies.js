import { useState, useEffect } from "react";
import { getFilteredMovies } from "API/api";

const Movies = () => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [inpit, setInput] = useState('');

    useEffect(() => {
        const filteredList = async () => {

        }
    },[])

    return (
        <>Movies</>
    )
}

export default Movies;