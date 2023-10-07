import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3"
const API_KEY = 'a4410970c86a3c457cc7f8c25d7a1e22';


export async function getTrendingMovies() {
    try {
        const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        new Error('Not Found');
    }
}

export async function getFilteredMovies(query) {
    try {
        const response = await axios.get(
            `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        return response.data;
    } catch (error) {
        new Error('Not Found');
    }
}

export async function getMovieByID(id) {
    try {
        const response = await axios.get(
            `movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        return response.data;
    } catch (error) {
        new Error('Not Found');
    }
}

export async function getCastByID(id) {
    try {
        const response = await axios.get(
            `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        return response.data;
    } catch (error) {
        new Error('Not Found');
    }
}

export async function getReviewsByID(id) {
    try {
        const response = await axios.get(
            `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
        );
        return response.data;
    } catch (error) {
        new Error('Not Found');
    }
}