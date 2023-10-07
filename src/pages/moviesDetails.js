import { getMovieByID } from "API/api";
import MovieInfoItem from "components/MovieInfo/MovieInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieInfo = () => {

    const [dataDetails, setDataDetails] = useState('');

    const { movieId } = useParams();

    useEffect(() => {
        async function getMoviesDetails() {
            try {
                getMovieByID(movieId)
                    .then(data => setDataDetails(data))
            } catch (error) {
                console.log(error)
            }
        }
        getMoviesDetails()
    },[movieId])

    return (
        <>
            <MovieInfoItem data={dataDetails}/>
        </>
    )
}

export default MovieInfo;