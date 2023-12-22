import axios from 'axios'

export const moviesCreditsAPI = async ({params}) => {
    

    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2VhNmNlYjEzMzZiNDdhZmJjZmQwMmYxMzRkNDYxNSIsInN1YiI6IjY1Nzg1ZjhhYTFkMzMyMDBlMWI4N2U2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YRj5rH5FE0-1EkWAMhLXOh_k8m4Dk_K899cmMNAUCKg'
        }
    };

    const movie = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}/credits?language=en-US`, options)
    const data = await movie.data
    const result = await data.results
    console.log(result)
    return result

    
}