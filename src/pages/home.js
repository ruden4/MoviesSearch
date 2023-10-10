import { getTrendingMovies } from "API/api";
import { useEffect, useState} from "react"
import TrendingList from "components/TrendingList/TrendingList";

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMoviesList() {
            try {
                getTrendingMovies()
                    .then(data => setMovies(data.results))
            } catch (error) {
                console.log(error)
            }
        }
        getMoviesList()
    },[])

    return (
        <TrendingList list={movies} />
    )
};

export default Home;