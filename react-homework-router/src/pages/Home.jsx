import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Home = () => {

    const movies = useLoaderData()
    console.log(movies)
    return(
        <>
            <ul>
                {movies.map((movie) => <li key={movie.id}><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></li>)}
                {movies.map((movie) => console.log(movie.id))}
            </ul>
        </>
    )
}