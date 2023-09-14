import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import {BsArrowLeft} from "react-icons/bs"


const MovieDetail = () => {
    const params = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [error, setError] = useState(false)

    const fetchMovieDetails = async () => {

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=1d35541573902b7260a788e28e9dfe98`)

            setMovieDetails(response.data)
        }catch(err) {
            console.log(err)
            setError(true)
        }
    }

    useEffect( () => {
        fetchMovieDetails()
    }, [])

    if (error) {
        return (
        <h1>There was an error fetching movie details</h1>
        )
    }

    return (
        <main className="px-4 py-2">
            <NavLink to="/" className="hover:underline text-[#000] text-[1.1rem] font-bold leading-normal"><BsArrowLeft /> Go back</NavLink>
            <section>
                <img className="w-[15rem] mb-4 mt-[2rem]"  src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt="movie poster"/>
                <div className="flex gap-4 items-center">
                    <p data-testid="movie-title" className="text-[1rem] font-bold leading-normal  text-[#666]">{movieDetails?.title}</p>
                    <span className="text-[1.2rem]">:</span>
                    <p data-testid="movie-release-date" className="text-[1rem] font-bold leading-normal  text-[#666]">{movieDetails?.release_date}</p>
                    <span className="text-[1.2rem]">:</span>
                    <p data-testid="movie-runtime" className="text-[1rem] font-bold leading-normal  text-[#666]">{movieDetails?.runtime}mins</p>
                </div>
                <p data-testid="movie-runtime" className="text-[1rem] leading-normal w-[50%] mt-2 text-[#666]">{movieDetails?.overview}</p>
            </section>
        </main>
    )
}

export default MovieDetail