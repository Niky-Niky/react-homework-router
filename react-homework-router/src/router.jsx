import {createBrowserRouter} from 'react-router-dom'
import { App } from './App'
import { Home } from './pages/Home'
import { moviesTrendingAPI } from './service/MoviesTrendingAPI'
import { MoviesSearch } from './pages/MoviesSearch'
import { Movie } from './pages/Movie'
import { moviesCreditsAPI } from './service/MoviesCreditsAPI'
import { searchMoviesAPI } from './service/SearchMoviesAPI'
import { moviesReviewsAPI } from './service/MoviesReviewsAPI'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: moviesTrendingAPI
            },
            {
                path: '/movies',
                element: <MoviesSearch/>,
            },
            {
                path: '/movies/:movieId',
                element: <Movie/>,
                loader: moviesTrendingAPI,
                children: [
                    {
                        path: '/movies/:movieId/cast',
                        loader: moviesCreditsAPI,
                        
                    },
                    {
                        path: '/movies/:movieId/reviews',
                        loader: moviesReviewsAPI,
                    }
                ]
            }
        ]
    }
])