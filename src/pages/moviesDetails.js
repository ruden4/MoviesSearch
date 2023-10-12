import { getMovieByID } from "API/api";
import MovieInfoItem from "components/MovieInfo/MovieInfo";
import { useEffect, useState, useRef } from "react";
import { useParams, Link, useLocation} from "react-router-dom";

const MovieDetails = () => {

    const location = useLocation();

    const backLocationRef = useRef(location.state?.from ?? '/movies')

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
    }, [movieId])
    
    return (
        <>  
            <Link to={backLocationRef.current}>{"<<Go BACK"}</Link>
            <MovieInfoItem data={dataDetails}/>
        </>
    )
}

export default MovieDetails;