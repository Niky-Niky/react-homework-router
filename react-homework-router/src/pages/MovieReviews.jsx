import { useLoaderData, useParams } from "react-router-dom"


export const MovieReviews = () => {
    const movieReviews = useLoaderData();
    const {movieId} = useParams();

    console.log(movieReviews);

    return(
        <>
            {movieReviews.map((movieReview) => <li key={movieReview.id}>{movieReview.content}</li>)}
            {movieReviews.map((movieReview) => console.log(movieReview))}
            <p>hell0</p>
        </>
    )

}