import { NavLink, useLoaderData, useParams } from "react-router-dom"

export const Movie = () => {
    
    const movies = useLoaderData();
    const {movieId} = useParams();


    console.log(movieId);
    console.log(movies);

    const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));
    console.log(selectedMovie);
    return(
        <>
            <h1>{selectedMovie.title}</h1>
            <p>Popularity: {selectedMovie.popularity}</p>
            <img src={`${selectedMovie.poster_path}`} alt="" />
            <p>Overview: {selectedMovie.overview}</p>
            <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </>
    )
};