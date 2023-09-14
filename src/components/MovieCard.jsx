import { NavLink } from "react-router-dom"

const MovieCard = (props) => {

    return (
        <div data-testid="movie-card" className="w-[18rem] h-[15rem] md:w-[11rem] ">
            <NavLink to={`/movies/${props?.movie_id}`}>
                <div className="flex items-center justify-center"> 
                    <img className="w-[18rem] h-[15rem]" src={`https://image.tmdb.org/t/p/w500/${props?.poster}`} data-testid="movie-poster"   alt="product image" />
                </div>
                <div className="flex flex-col mt-4">
                    <p data-testid="movie-title" className="text-[1.125rem] text-[#111827] font-bold leading-normal mb-2">{props?.title}</p>
                    <p data-testid="movie-release-date" className="text-[0.75rem] text-[#9CA3AF] font-bold leading-normal">{props?.release_date}</p>
                    </div>
            </NavLink>
        </div>
    )
}

export default MovieCard